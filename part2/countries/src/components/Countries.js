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
    return <div className='py-4'>Too many matches, specify another filter</div>
  } else if (filteredCountries.length === 1) {
    return <DetailedCountry country={filteredCountries[0]} />
  } else {
    return (
      <ul>
        {filteredCountries.map((country) => (
          <li key={country.cca2} className='py-2'>
            {country.name.common}{' '}
            <button
              onClick={() => handleButtonPress(country.cca2)}
              className='bg-blue-500 py-0.5 px-2 rounded text-white font-bold hover:bg-blue-700'
            >
              show
            </button>
            {countriesToShow === country.cca2 ? (
              <div className='p-4 mt-8 bg-white shadow w-96'>
                <DetailedCountry country={country} />
              </div>
            ) : null}
          </li>
        ))}
      </ul>
    )
  }
}

export default Countries
