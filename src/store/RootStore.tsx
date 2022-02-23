import React, { createContext, FC, ReactNode, useContext } from "react";
import TodoStore from "./TodoStore";

/* Store helpers (RootStore) */
const StoreContext = createContext(null);

export const StoreProvider: FC<{
  children?: ReactNode;
  store: object;
}> = ({ children, store }) => {
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

/* Hook  */
export const useRootStore = () => useContext(StoreContext);

export default TodoStore;
