import React, {useContext, useState, useEffect}from 'react'
import { menuItems } from '../menuItems';

const ThemeContext = React.createContext()
const ThemeUpdateContext = React.createContext()
const GenreList = React.createContext()

export function useTheme() {
    return useContext(ThemeContext)
}

export function useThemeUpdate() {
    return useContext(ThemeUpdateContext)
}

export function useGenreList() {
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

    

    const genreLinkList = async () => {
        if(genreList){
            const idx = menuItems?.findIndex(e => e.title === 'Genre') 
            if (idx > -1) {
                menuItems[idx].submenu = genreList.map(genre => {
                  return {
                    title: genre.name,
                    //url: `genre/${genre.name.toLowerCase()}`
                    url: `genre/${genre.id}`
                  }
                });
              }   
            }
        }
        genreLinkList()  
    } 

    export default function ContextProvider({children}) {
        
    const [darkTheme, setDarkTheme] = useState(false)
    function toggleTheme() {
        setDarkTheme(prevDarkTheme => !prevDarkTheme)
    }
    
    return (
        <ThemeContext.Provider value={darkTheme}>
            <ThemeUpdateContext.Provider value={toggleTheme}>
                <GenreList.Provider value={useGenreList}>
                    {children}
                </GenreList.Provider>
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
  )
}

/*
    let genreArray = []              
    for ( let i of genreList){
    let genre = {}
    genre.title = Object.values(i)[1]
    genre.url = genre.title.toLowerCase()
    genreArray.push(genre)
            if (!menuItems[idx]?.submenu.find(({
                name
            }) => name === i.name)) { 
            menuItems[idx]?.submenu.push(genre);
            }
    }
    console.log("🚀 ~ genreArray", genreArray)
    const newMenuItems = menuItems.concat(genreArray)
    console.log("🚀 ~ newMenuItems", newMenuItems)
}*/