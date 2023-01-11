export default function Button({type, styling, text}){

    return(
        <button type={type} className={styling}>{text}</button>
    )
}
