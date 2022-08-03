import { createContext, useMemo, useReducer } from 'react';

export const SkincareStateContext = createContext();
export const SkincareDispatchContext = createContext();

function reducer(list, { type, payload }) {
  switch (type) {
    case 'load':
      return payload;
    case 'add':
      return [...list, payload];
    case 'update':
      return list.map((f) => (f.id === payload.id ? payload : f));
    case 'remove':
      return list.filter((f) => f.id !== payload.id);
    default:
      throw Error(`Unknown action: ${type}`);
  }
}

export default function SkincareProvider({ children }) {
  const [skincare, skincareDispatch] = useReducer(reducer, null);
  const [skincareEx, skincareExDispatch] = useReducer(reducer, null);

  const stateValue = {
    skincare,
    skincareEx,
  };

  const dispatchValue = useMemo(
    () => ({
      skincareDispatch,
      skincareExDispatch,
    }),
    [skincareDispatch, skincareExDispatch]
  );

  return (
    <SkincareStateContext.Provider value={stateValue}>
      <SkincareDispatchContext.Provider value={dispatchValue}>
        {children}
      </SkincareDispatchContext.Provider>
    </SkincareStateContext.Provider>
  );
}
