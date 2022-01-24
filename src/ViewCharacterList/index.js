import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { CharacterList } from '../CharacterList';

function ViewCharacterList() {
  return (
    <Container maxWidth="xl">
      <Box >
        <Typography variant="h2" mt={1.875} mb={1.875} color="warning.light" align='center'>
          Characters
        </Typography>
        <CharacterList />
      </Box>
    </Container >
  );
}

export { ViewCharacterList };