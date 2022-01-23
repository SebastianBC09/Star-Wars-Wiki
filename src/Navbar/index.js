import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJedi } from '@fortawesome/free-solid-svg-icons'
import "./Navbar.scss"

const jediOrder = <FontAwesomeIcon icon={faJedi} size='2x' />

function Navbar() {
  return (
    <section className='Navbar'>
      <section className='Navbar-title--container'>
        <h1>Star Wars Wiki</h1>
      </section>
      <section className='Navbar-icon--container'>
        {jediOrder}
      </section>
    </section>
  )
}

export { Navbar };