import React, { createContext, useState } from 'react';
import type { Dispatch, PropsWithChildren, SetStateAction } from 'react';

export function createCtx<A>(defaultValue: A) {
  type UpdateType = Dispatch<SetStateAction<typeof defaultValue>>;
  const defaultUpdate: UpdateType = () => defaultValue;
  const Ctx = createContext({
    state: defaultValue,
    update: defaultUpdate,
  });

  function Provider(props: PropsWithChildren<{}>) {
    const [state, update] = useState(defaultValue);
    return <Ctx.Provider value={{ state, update }} {...props} />;
  }
  return [Ctx, Provider] as const;
}
