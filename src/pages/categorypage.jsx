import Heading from "../components/heading";
import Menubar from "../components/menubar";

export default function CategoryPage(props){
    return(
        <>
        <Menubar/>
        <Heading text={props.category_name}/>
        </>
    )
}