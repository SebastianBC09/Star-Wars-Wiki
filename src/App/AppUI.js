import React from 'react';
import { Context } from '../Context'
import { Navbar } from '../Navbar';
import { ViewCharacterList } from '../ViewCharacterList'
import { CharacterList } from '../CharacterList';

function AppUI() {
  const { loading } = React.useContext(Context);

  return (
    <>
      <Navbar />
      {loading && <p>Estamos cargando, no desesperes...</p>}
      <ViewCharacterList>
        <CharacterList />
      </ViewCharacterList>
    </>
  );
};

export { AppUI };

