import React from 'react'

export default function Card({key, item}) {
  return (
    <div key={key} className='card'>
        <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt={`Movie poster of ${item.original_title}`} />
        <a href={item.id} >{item.original_title}</a> 
    </div>
  )
}
