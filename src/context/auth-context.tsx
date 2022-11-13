import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import type { Dispatch, PropsWithChildren, SetStateAction } from 'react';
import { AppState } from 'react-native';
import type { AppStateStatus } from 'react-native';
import { authenticateAsync } from 'expo-local-authentication';

interface AuthContextInterface {
  isAuth: boolean | null;
  setIsAuth: Dispatch<SetStateAction<boolean | null>>;
}

const AuthContext = createContext<AuthContextInterface | null>(null);

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(`useAuth must be used within an AuthProvider`);
  }
  return context;
}

function AuthProvider(props: PropsWithChildren) {
  const [isAuth, setIsAuth] = useState<boolean | null>(null);
  const value = useMemo(
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

  useEffect(() => {
    // authenticate on app start
    authenticateAsync().then((result) => {
      setIsAuth(result.success);
    });
  }, []);

  useEffect(() => {
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
