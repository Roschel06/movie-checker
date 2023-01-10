import React from 'react'
import {Link} from 'react-router-dom'

export default function Home() {
  return (
    <div className='container'>
      <section>
        <Link to='/' className='btn-secondary'>
          New Movies 
        </Link>
      </section>
      <div className='m-1'>next topic</div>
    </div>
  )
}
