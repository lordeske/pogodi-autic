import React from 'react'

const MainPage = ( {korisnik}) => {











  return (
    <div>
      <h1>Zdravo, {korisnik.imeKorisnika}</h1>
      <h2>Tvoj email je: , {korisnik.email}</h2>
    </div>
  )
}

export default MainPage
