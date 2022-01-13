import React, { useState } from 'react'
import DetailedCountry from './DetailedCountry'

const Countries = ({ filter, countries }) => {
  const [countriesToShow, newCountriesToShow] = useState([])
  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(filter.toLowerCase())
  )

  const handleButtonPress = (cca2) => {
    newCountriesToShow(cca2)
    console.log(`countriesToShow`, countriesToShow)
  }

  if (filteredCountries.length > 10) {
    return <div>Too many matches, specify another filter</div>
  } else if (filteredCountries.length === 1) {
    return <DetailedCountry country={filteredCountries[0]} />
  } else {
    return (
      <ul>
        {filteredCountries.map((country) => (
          <li key={country.cca2}>
            {country.name.common}{' '}
            <button onClick={() => handleButtonPress(country.cca2)}>
              show
            </button>
            {countriesToShow === country.cca2 ? (
              <DetailedCountry country={country} />
            ) : null}
          </li>
        ))}
      </ul>
    )
  }
}

export default Countries
