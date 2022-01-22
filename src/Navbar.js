import React from 'react';
import "./Navbar.scss"

function Navbar() {
  return (
    <section className='Navbar'>
      <section className='Navbar-title--container'>
        <h1>Star Wars Wiki</h1>
      </section>
      <section className='Navbar-icon--container'>
        <h2>Logo or icon related to star wars here!</h2>
      </section>
    </section>
  )
}

export { Navbar };