/* State Provider. */

import React, { createContext, useContext, useReducer } from "react";

// Prepares the `Data Layer`.
export const StateContext = createContext();

// Wraps the app around the `Data Layer`.
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Pull information from the `Data Layer`.
export const useStateValue = () => useContext(StateContext);
