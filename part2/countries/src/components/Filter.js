import React from 'react'

const Filter = (props) => {
  return (
    <div className='text-gray-600 text-4xl font-bold p-4 flex center'>
      <span className=''>find countries</span>
      <input
        value={props.newFilter}
        onChange={props.handleFilterChange}
        className='placeholder:italic placeholder:text-gray-400 bg-white border border-gray-300 ml-3 mt-1 h-9 w-96 rounded-md py-4 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm '
        placeholder='Search for a country...'
        type={'text'}
      />
    </div>
  )
}
export default Filter
