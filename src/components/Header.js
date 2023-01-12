import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { BiCameraMovie } from 'react-icons/bi';
import {useEffect, useState} from 'react'
import { menuItems } from '../menuItems';

export default function Header2() {
    
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
    
    console.log("🚀 ~ menuItems", menuItems)

    let genreArray = []

    const genreLinkList = async () => {
        for ( let i of genreList){
            genreArray.push(Object.values(i)[1])
        }
        console.log("🚀 ~ newArray", genreArray)
    
        const toObject= {...genreArray};
    
    console.log("The converted array to object is:", toObject);


    /* NEXT STEP => add new key value pair for link path to objects  */

/*     toObject.map((item, idx) => ({...item, bla: idx.name}))
console.log("New 2:", toObject); */
    
/*  menuItems.push(...genreList)
    console.log("🚀 ~ menuItems changed", menuItems)
 */

    }
    genreLinkList()




    return (
        <header>
            <div className="nav-area">
            <Link to='/' className='logo'>
                <BiCameraMovie /><span>Movie Checker</span>
            </Link>
            <Navbar />
            </div>
        </header>
    );
};
