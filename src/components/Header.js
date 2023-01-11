import React from 'react'
import {Link} from 'react-router-dom'
import { BiCameraMovie } from 'react-icons/bi';
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx';
import { useState } from 'react';
export default function Header() {

    const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
    <nav>
        <div className="container">
            <Link to='/' className='logo'>
                <BiCameraMovie /><span>Movie Checker</span>
            </Link>
            <button className="hamburger" onClick={() => {setIsNavExpanded(!isNavExpanded);}}>
                {isNavExpanded ? <RxCross1 /> : <RxHamburgerMenu />}
            </button>
            <div
                className={isNavExpanded ? "menu expanded" : "menu"}
            >
                <ul>
                    <li>
                        Category
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
