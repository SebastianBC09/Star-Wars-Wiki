/* eslint-disable react/jsx-no-constructed-context-values */
import React from 'react';

const Context = React.createContext();

function Provider(props) {
  const [people, setPeople] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [openModal, setOpenModal] = React.useState(false);
  const { children } = props;

  React.useEffect(() => {
    async function fetchPeople() {
      const response = await fetch('https://swapi.dev/api/people');
      const data = await response.json();
      setPeople(data.results)
      setLoading(false)
    }
    fetchPeople()
  }, []);

  return (
    <Context.Provider value={{
      people,
      setPeople,
      loading,
      setLoading,
      openModal,
      setOpenModal
    }}>
      {children}
    </Context.Provider>)
};

export { Context, Provider }