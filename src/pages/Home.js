import React from 'react'
import {Link} from 'react-router-dom'
import {useEffect, useState} from 'react'
import Search from '../components/Search'

export default function Home() {

  const [movieList, setMovieList] = useState([])
  const [userInput, setUserInput] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [selctedMovie, setSelectedMovie] = useState([])

  useEffect(()=>{
    const getData = async () =>{
      try{
          //const response = await fetch('https://api.themoviedb.org/3/movie/550?api_key=0eb3919b112bcaa0b1c2ce90eed19031')
          const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=0eb3919b112bcaa0b1c2ce90eed19031&language=en-US&page=1&include_adult=false&query=${searchQuery}`)
          const data = await response.json()
          setMovieList(data.results)
          console.log(data.results)
        } catch(error){
          console.log(error.message);
        }
    }
    if(searchQuery.length > 3) getData()
  }, [searchQuery])



const handleSearchChange = e => {
  setUserInput(e.target.value)
}
const handleClick = e => {
  e.preventDefault();
  setSearchQuery(userInput)
  console.log(movieList)
}

const handleSelectedMovie = e => {
  setSelectedMovie(selctedMovie)
}

  return (
    <div className='container'>
      <section>
        <Link to='/' className='btn-secondary'>
          New Movies 
        </Link>
      </section>
      <Search value={userInput} onChange={handleSearchChange} onClick={handleClick}/>
        {movieList.map((item, key) => <li key={key}> <a href={item.id} onClick={handleSelectedMovie}>{item.original_title}</a> </li>)}
      <div className='m-1'>next topic</div>
    </div>
  )
}
