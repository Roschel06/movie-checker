import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import {useEffect, useState} from 'react'
import Button from '../components/Button'
import Input from '../components/Input'
import Card from '../components/Card'

export default function SearchResult() {

    let { query } = useParams();
    const navigate = useNavigate();
    const [movieList, setMovieList] = useState([])
    const [input, setInput] = useState('')

    const handleClick = e => {
        e.preventDefault();
        navigate(`/searchresult/${input}`)
    }
    
    useEffect(()=>{
        const getData = async () =>{
          try{
              const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`)
              const data = await response.json()
              setMovieList(data.results)
              console.log(data.results)
            } catch(error){
              console.log(error.message);
            }
        }
        getData()
      }, [query])
    
    return (
        <div>SearchResult {query}
            <form onSubmit={handleClick}>
                <Input placeholder='Search for movie title' value={input} onChange={e => setInput(e.target.value)} />
                <Button type="submit" styling="btn-secondary" text="Search"/>
            </form>
            <div className='container card-grid'>
                {movieList.map((item, key) => <Card key={key} item={item} />)}
            </div>
        </div>
    )
}
