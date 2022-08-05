import { createContext, useReducer } from 'react';

export const TeaStateContext = createContext();

//what is happening here?
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

export default function TeaProvider({ children }) {
  //where is children coming from?
  const [families, familiesDispatch] = useReducer(reducer, null);
  // const [skincareEx, skincareExDispatch] = useReducer(reducer, null);
  //where is happening here ?

  const stateValue = {
    families,
    familiesDispatch,
  };

  //what is this piece of code doing?

  return (
    <TeaStateContext.Provider value={stateValue}>
      {children}
    </TeaStateContext.Provider>
  );
}
