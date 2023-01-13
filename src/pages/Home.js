import React from 'react'
import {Link} from 'react-router-dom'
import Search from '../components/Search'
export default function Home() {

  return (
    <div className='container'>
       <section>
        <Link to='/' className='btn-secondary'>
          New Movies 
        </Link>
      </section>
      <Search />
    </div>
  )
}
