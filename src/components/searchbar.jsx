import '../utils.css'

export default function Searchbar(props){

    return(
        <>
        <input onChange={props.onChange} className={props.classtype} type="text" placeholder="Search Items"/>
        </>
    )
}