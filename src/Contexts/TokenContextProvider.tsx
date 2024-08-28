import React, { useState, createContext, ReactNode } from "react";
import { getStoredToken, isTokenExpired } from "../utils/helpers";
import useLoginHandler from "../components/LoginPage/LoginHandler";

export type TokenType = {
  token:string
};

export type TokenContextType = {
  token: string | null;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
};

const initialTokenContext: TokenContextType = {
  token: null,
  setToken: () => null,
};

const TokenContext = createContext<TokenContextType>(initialTokenContext);

type TokenContextProviderProps = {
  children: ReactNode;
};

export const TokenContextProvider = ({ children }: TokenContextProviderProps) => {
  let storedToken = getStoredToken()
 
  const [token, setToken] = useState<string | null>(
    storedToken ? storedToken : null
  );
  return (
    <TokenContext.Provider value={{ token, setToken }}>
      {children}
    </TokenContext.Provider>
  );
};

export default TokenContext;