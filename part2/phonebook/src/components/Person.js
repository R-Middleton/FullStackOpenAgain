import React from 'react'

const Person = ({ person }) => (
  <div>
    {person.name} {person.phone_number}
  </div>
)

export default Person
