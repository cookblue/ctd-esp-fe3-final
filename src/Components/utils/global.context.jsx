import { createContext, useReducer, useMemo } from "react";

export const initialState = {theme: "light", data: []}

export const ContextGlobal = createContext(undefined);

function reducer(state, action) {
  switch (action.type) {
      case "SET_THEME":
          return { ...state, theme: action.payload };
      case "SET_DATA":
          return { ...state, data: action.payload };
      default:
          return state;
  }
}

// eslint-disable-next-line react/prop-types
export const ContextProvider = ( { children } ) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const contextValue = useMemo(() => {
      return { state, dispatch };
  }, [state, dispatch]);

  return (
      <ContextGlobal.Provider value={contextValue}>
          {children}
      </ContextGlobal.Provider>
  );
};
