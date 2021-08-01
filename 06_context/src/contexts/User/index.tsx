import React, { createContext, FC, ReactNode, useMemo, useState } from 'react';

export type UserContextType = {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
};

export const UserContext = createContext<UserContextType>({
  name: '',
  setName: () => {},
});

interface IUserProvider {
  children: ReactNode;
}

const UserProvider: FC<IUserProvider> = ({ children }) => {
  const [name, setName] = useState('React Native');
  const value = useMemo(() => ({ name, setName }), [name, setName]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;
