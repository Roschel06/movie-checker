import Input from './Input'
import Button from './Button'

export default function Search({value, onChange,onClick}) {
    return ( 
        <form onSubmit={onClick}>
            <Input value={value} onChange={onChange} />
            <Button type="submit" styling="btn-secondary" text="Search"/>
        </form>
    )
}