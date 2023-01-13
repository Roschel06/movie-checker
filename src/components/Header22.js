import React from 'react'
import {Link} from 'react-router-dom'
import { BiCameraMovie } from 'react-icons/bi';
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx';
import {useEffect, useState} from 'react'
export default function Header22() {

    const [isNavExpanded, setIsNavExpanded] = useState(false)
    const [genreList, setGenreList] = useState()
    
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

  return (
    <nav>
        <div className="container">
            <Link to='/' className='logo'>
                <BiCameraMovie /><span>Movie Checker</span>
            </Link>
            <button className="hamburger" onClick={() => {setIsNavExpanded(!isNavExpanded);}}>
                {isNavExpanded ? <RxCross1 /> : <RxHamburgerMenu />}
            </button>
            <div className={isNavExpanded ? "menu expanded" : "menu"}>
                <ul className='menu-main'>
                    <li>
                        Genres
                        <ul className='menu-sub'>
                            {genreList?.map((item, key) => <li key={key}><Link to='/'>{item.name}</Link></li>)}
                        </ul>
                    </li>
                    <li>
                        About
                    </li>
                </ul>
            </div>
        </div>
    </nav> 
  )
}
