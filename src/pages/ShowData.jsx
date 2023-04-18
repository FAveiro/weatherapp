import React from 'react'

//* Import components
import Search from '../components/Search'
import Cards from '../components/Cards'

function ShowData() {
  return (
    <div className='container_page'>
      <Search/>
      <Cards/>
    </div>
  )
}

export default ShowData