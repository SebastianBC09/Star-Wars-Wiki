import React from 'react';

const Context = React.useContext();

function Provider(props) {
  const { children } = props;
  return (
    <Context.Provider>
      {children}
    </Context.Provider>)
};

export { Provider }