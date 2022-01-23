import React, { useEffect } from 'react'
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import { Navbar } from './Navbar';
import { CharacterCard } from './CharacterCard';
import './App.scss';
import { CharacterList } from './CharacterList';

function App() {
  const [people, setPeople] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    async function fetchPeople() {
      let response = await fetch('https://swapi.dev/api/people');
      let data = await response.json();
      setPeople(data.results)
      setLoading(false)
    }
    fetchPeople()
  }, []);
  return (
    <section className="App">
      <Navbar />
      {loading ? (
        <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
          <CircularProgress color="secondary" />
          <CircularProgress color="success" />
          <CircularProgress color="inherit" />
        </Stack>
      ) : (
        // <CharacterCard data={people} />
        <CharacterList data={people} />
      )}
    </section>
  );
}

export default App;
