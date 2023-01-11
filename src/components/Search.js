import Input from './Input'
import Button from './Button'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'

export default function Search() {
    
    const [input, setInput] = useState('')
    const navigate = useNavigate();

    const handleClick = e => {
        e.preventDefault();
        navigate(`searchresult/${input}`)
    }

    return ( 
        <form onSubmit={handleClick}>
            <Input placeholder='Search for movie title' value={input} onChange={e => setInput(e.target.value)} />
            <Button type="submit" styling="btn-secondary" text="Search"/>
        </form>
    )
}