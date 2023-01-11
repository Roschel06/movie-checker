export default function Input({value, onChange}){

    return(
        <input placeholder="Search for movie title" value={value} onChange={onChange}/>
    )
}