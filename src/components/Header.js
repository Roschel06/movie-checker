import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { BiCameraMovie } from 'react-icons/bi';
import {useEffect, useState} from 'react'
import { menuItems } from '../menuItems';
import {useThemeUpdate, useGenreList} from './Context'

export default function Header2() {
    const toggleTheme = useThemeUpdate()
    useGenreList()
/*     const [genreList, setGenreList] = useState()
    
    useEffect(()=>{
        const getData = async () =>{
            try{
                const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
                const data = await response.json()
                setGenreList(data.genres)
            } catch(error){
                console.log(error.message);
            }
        }
        getData()
    }, [])
    
    console.log("🚀 ~ genreList", genreList)
    
    console.log("🚀 ~ menuItems", menuItems)

    let genreArray = []

    const genreLinkList = async () => {
        if(genreList){
        for ( let i of genreList){
            
            let genre = {}

            genre.title = Object.values(i)[1]
            genre.url = genre.title.toLowerCase()

            genreArray.push(genre)
        }
        console.log("🚀 ~ genreArray", genreArray)

        }
    }
    genreLinkList() */



    return (
        <header>
            <div className="nav-area">
            <Link to='/' className='logo'>
                <BiCameraMovie /><span>Movie Checker</span>
            </Link>
            <Navbar />
            <button onClick={toggleTheme}>Theme</button>
            </div>
        </header>
    );
};
