import React from 'react';
import { AuthenticationStore } from './AuthenticationStore';
import { HierarchyTreeStore } from './HierarchyTreeStore';

const StoreContext = React.createContext({
  authenticationStore: new AuthenticationStore(),
  hierarchyTreeStore: new HierarchyTreeStore(),
});

export const StoreProvider = ({ children }: any) => {
  const store = React.useContext(StoreContext);

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};

export const useStores = () => {
  const store = React.useContext(StoreContext);
  if (!store) {
    throw new Error('useStore must be used within a StoreProvider.');
  }
  return store;
};
