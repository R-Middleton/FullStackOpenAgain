import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import './index.css'
import Filter from './components/Filter'
import Countries from './components/Countries'

const App = () => {
  const [newFilter, setNewFilter] = useState('')
  const [countries, setCountries] = useState([])

  useEffect(() => {
    console.log('effect')
    axios.get('https://restcountries.com/v3.1/all').then((response) => {
      console.log(response.data)
      setCountries(response.data)
    })
  }, [])

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  return (
    <div className='bg-gray-100 h-screen'>
      <div className='col-span-1'>
        <Filter newFilter={newFilter} handleFilterChange={handleFilterChange} />
      </div>
      <div className='text-gray-500 text-2xl px-6 col-span-1'>
        <Countries filter={newFilter} countries={countries} />
      </div>
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))
