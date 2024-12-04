import { createContext, useContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [connected, setConnected] = useState(false);
 

  return (
    <GlobalContext.Provider
      value={{
        connected,
        setConnected,      
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
