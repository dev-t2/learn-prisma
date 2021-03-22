import React, { createContext, FC, useCallback, useState } from 'react';

const UserContext = createContext({
  user: { name: '' },
  dispatch: (text: string) => {},
});

interface IUserProvider {
  children: JSX.Element;
}

const UserProvider: FC<IUserProvider> = ({ children }) => {
  const [name, setName] = useState('t2');

  const updateName = useCallback(text => {
    setName(text);
  }, []);

  const value = { user: { name }, dispatch: updateName };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };

export default UserContext;
