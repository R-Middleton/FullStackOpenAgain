import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [notification, setNewNotification] = useState(null)

  useEffect(() => {
    axios
      .get('https://arcane-anchorage-66398.herokuapp.com/api/persons')
      .then((response) => {
        setPersons(response.data)
      })
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setNewNotification(null)
    }, 5000)
  }, [notification])

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      phone_number: newNumber,
    }

    axios.post(
      'https://arcane-anchorage-66398.herokuapp.com/api/persons',
      personObject
    )

    setPersons(persons.concat(personObject))
    setNewNotification(`Added ${newName}`)
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  const Notification = ({ message }) => {
    if (message == null) {
      return null
    }

    return <div className='notification'>{message}</div>
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notification} />
      <Filter newFilter={newFilter} handleFilterChange={handleFilterChange} />

      <h3>Add a new number</h3>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />

      <h3>Numbers</h3>
      <Persons persons={persons} filter={newFilter} />
    </div>
  )
}

export default App
