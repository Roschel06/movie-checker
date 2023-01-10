import React from 'react'
import {Link} from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
        <div className="container">
            <Link to='/imprint' className='btn-secondary'>
                Imprint 
            </Link>
        </div>
    </footer>
  )
}
