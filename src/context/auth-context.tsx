import React from 'react';
import type { Dispatch, SetStateAction } from 'react';
import { AppState } from 'react-native';
import type { AppStateStatus } from 'react-native';
import { authenticateAsync } from 'expo-local-authentication';

interface AuthContextInterface {
  isAuth: boolean | null;
  setIsAuth: Dispatch<SetStateAction<boolean | null>>;
}

const AuthContext = React.createContext<AuthContextInterface | null>(null);

function useAuth() {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error(`useAuth must be used within an AuthProvider`);
  }
  return context;
}

function AuthProvider(props: React.PropsWithChildren) {
  const [isAuth, setIsAuth] = React.useState<boolean | null>(null);
  const value = React.useMemo(
    () => ({
      isAuth,
      setIsAuth,
    }),
    [isAuth],
  );

  const _handleAppStateChange = (nextAppState: AppStateStatus) => {
    // de-authenticate when app moves to background
    if (nextAppState === 'background') {
      setIsAuth(false);
    }
  };

  React.useEffect(() => {
    // authenticate on app start
    authenticateAsync().then((result) => {
      setIsAuth(result.success);
    });
  }, []);

  React.useEffect(() => {
    const subscription = AppState.addEventListener(
      'change',
      _handleAppStateChange,
    );
    return () => {
      subscription.remove();
    };
  }, []);

  return <AuthContext.Provider value={value} {...props} />;
}

export { AuthProvider, useAuth };
