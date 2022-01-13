import React from 'react'
import DetailedCountry from './DetailedCountry'

const Countries = ({ filter, countries }) => {
  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(filter.toLowerCase())
  )

  if (filteredCountries.length > 10) {
    return <div>Too many matches, specify another filter</div>
  } else if (filteredCountries.length === 1) {
    return <DetailedCountry country={filteredCountries[0]} />
  } else {
    return (
      <ul>
        {filteredCountries.map((country) => (
          <li key={country.cca2}>{country.name.common} </li>
        ))}
      </ul>
    )
  }
}

export default Countries
