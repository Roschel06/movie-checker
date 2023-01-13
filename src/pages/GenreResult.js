import React from 'react'
import { useParams } from 'react-router-dom';
import {useEffect, useState} from 'react'
import Card from '../components/Card'

export default function GenreResult() {

    let { id } = useParams();
    console.log("🚀 ~ id", id)
    const [movieList, setMovieList] = useState([])
    
    
    useEffect(()=>{
        const getData = async () =>{
            try{
                const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/lists?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
                const data = await response.json()
                setMovieList(data)
                console.log(data)
            } catch(error){
                console.log(error.message);
            }
        }
        getData()
    }, [id])
    
    console.log("🚀 ~ movieList", movieList)
    return (
        <div>GenreResult {id}
{/*             <div className='container card-grid'>
                {movieList.map((item, key) => <Card key={key} item={item} />)}
            </div> */}
        </div>
    )
}
