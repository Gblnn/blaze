import '../utils.css'

export default function Searchbar(props){

    return(
        <>
        <input className={props.classtype} type="text" placeholder="Search Items"/>
        </>
    )
}