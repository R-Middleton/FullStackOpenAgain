import React from 'react'

const DetailedCountry = ({ country }) => {
  return (
    <div>
      <h1 className='text-gray-800 text-5xl font-semibold'>
        {country.name.common}
      </h1>
      <div>
        <text className='font-semibold text-lg uppercase'>capital</text>{' '}
        {country.capital}
      </div>
      <div>
        <text className='font-semibold text-lg uppercase'>population</text>{' '}
        {country.population}
      </div>
      <div>
        <text className='font-semibold text-lg uppercase'>Languages</text>
      </div>
      <ul className='text-base'>
        {Object.values(country.languages).map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <div className='pt-2'>
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
