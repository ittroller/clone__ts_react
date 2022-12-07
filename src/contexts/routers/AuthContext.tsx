import React, { createContext, useContext, useState } from 'react';

interface IAuthContext {
  loading: boolean;
}

interface IProvider {
  children?: React.ReactNode;
}

export const AuthContext = createContext<IAuthContext>({
  loading: false,
});

export function useAuthContext(): IAuthContext {
  return useContext(AuthContext);
}

export const AuthProvider: React.FC<IProvider> = ({ children }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loading, setLoading] = useState<boolean>(false);

  const value = { loading };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
