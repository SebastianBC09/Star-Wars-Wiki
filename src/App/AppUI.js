import React from 'react';
import { Context } from '../Context'
import { Navbar } from '../Navbar';
import { ViewCharacterList } from '../ViewCharacterList'

function AppUI() {
  const { loading } = React.useContext(Context);

  return (
    <>
      <Navbar />
      {loading && <p>Estamos cargando, no desesperes...</p>}
      <ViewCharacterList />
    </>
  );
};

export { AppUI };

