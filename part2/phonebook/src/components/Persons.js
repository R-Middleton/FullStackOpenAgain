import React from 'react'
import Person from './Person'

const Persons = ({persons, filter}) => {
    const output = persons.map(person => {
        if (person.name.toLowerCase().includes(filter.toLowerCase())) {
            return (
              <Person person={person} key={person.name} />
            )
          } else {
            return ''
          } 
    })

    return (
        <div>
            {output}
        </div>
    )
}

export default Persons