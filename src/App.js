import React, { useEffect } from 'react'
import { Navbar } from './Navbar';
import './App.scss';

function App() {
  const [people, setPeople] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    async function fetchPeople() {
      let response = await fetch('https://swapi.dev/api/people');
      let data = await response.json();
      setPeople(data.results)
    }

    fetchPeople()
  }, []);
  console.log('data', people);
  return (
    <section className="App">
      <Navbar />
    </section>
  );
}

export default App;
