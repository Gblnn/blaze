import '../utils.css'

export default function Searchbar(props){

    return(
        <>
        <input id={props.id} onChange={props.onChange} className={props.classtype} type="text" placeholder="Search Items"/>
        </>
    )
}