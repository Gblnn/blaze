import '../utils.css'

export default function Searchbar(props){

    return(
        <>
        <input className={props.class} type="text" placeholder="Search Items"/>
        </>
    )
}