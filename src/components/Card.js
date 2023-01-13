import React from 'react'
import { Link } from 'react-router-dom'

export default function Card({item}) {
  return (
    <Link to={`/movie/${item.id}`} className='card'>
      {item.poster_path ?
        <img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${item.poster_path}`} alt={`Movie poster of ${item.original_title}`} /> 
        : <div className="no-img"></div>
      }
      <div className='card-text'>
          {item.original_title}
      </div>  
    </Link>
  )
}
