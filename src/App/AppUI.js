import React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import { Context } from '../Context'
import { Navbar } from '../Navbar';
import { ViewCharacterList } from '../ViewCharacterList'
import { CharacterList } from '../CharacterList';

function AppUI() {
  const { people, loading, openModal, setOpenModal } = React.useContext(Context);

  return (
    <>
      <Navbar />
      {
        loading ? (
          <ViewCharacterList>
            <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
              <CircularProgress color="secondary" />
              <CircularProgress color="success" />
              <CircularProgress color="inherit" />
            </Stack>
          </ViewCharacterList>
        ) : (
          <ViewCharacterList>
            <CharacterList people={people} openModal={openModal} setOpenModal={setOpenModal} />
          </ViewCharacterList>
        )
      }
    </>
  );
};

export { AppUI };

