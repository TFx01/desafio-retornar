import React, { createContext, useReducer } from "react";

const createDataContext = (reducer, actions, initialState) => {
  const Context = createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const getActions = {};

    for (let key in actions) {
      getActions[key] = actions[key](dispatch);
    }

    return (
      <Context.Provider value={{ state, ...getActions }}>
        {children}
      </Context.Provider>
    );
  };

  return { Context, Provider };
};

export default createDataContext;
