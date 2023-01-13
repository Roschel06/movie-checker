import { useParams } from 'react-router-dom';
import {useEffect, useState} from 'react'

export default function Movie() {
    const { id } = useParams();
    console.log("🚀 ~ id", id)

    const [movie, setMovie] = useState()
    
    useEffect(()=>{
        const getData = async () =>{
            try{
                const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
                const data = await response.json()
                setMovie(data)
            } catch(error){
                console.log(error.message);
            }
        }
        getData()
    }, [])
    
    console.log("🚀 ~ movie", movie)
  return (
    <div className="movie-details">
        <div className="hero" style={{backgroundImage: `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${movie?.backdrop_path})`}}>
            <div className="content">
                <div className="image">
                    {movie?.poster_path ?
                    <img src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`} alt={`Movie poster of ${movie?.original_title}`} /> 
                    : <div className="no-img"></div>
                    }
                </div>
                <div className="hero-details">
                    <div className='title'>
                        {movie?.original_title}
                    </div>  
                    <div className="genre-tags">
                        {movie?.genres.map((item, idx) => <span key={idx}>{item.name}</span> )}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}