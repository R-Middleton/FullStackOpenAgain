import React from 'react'

const DetailedCountry = ({ country }) => {
  return (
    <div>
      <h1>{country.name.common}</h1>
      capital {country.capital}
      <br />
      population {country.population}
      <br />
      <h2>Languages</h2>
      <ul>
        {Object.values(country.languages).map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <div>
        <img
          alt='country flag '
          src={Object.values(country.flags)[0]}
          width='100'
          heigh='100'
        />
      </div>
    </div>
  )
}

export default DetailedCountry
