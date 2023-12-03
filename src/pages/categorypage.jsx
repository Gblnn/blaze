
import BrowseHeader from "../components/browseheader";
import Item from "../components/item";
import Menubar from "../components/menubar";
import {data} from '../productlist'

export default function CategoryPage(props){
    return(
        <>
        <Menubar/>
        <BrowseHeader text="Browse All" tag="promotional"/>
        <div className="wrapper">
            <div className="item_container">
            {data.map((item) => (
            <Item img ={item.img} name={item.product_name} price={item.price}/>
            ))}
            </div>
          </div>
          <div className="empty"></div>
        
        </>
    )
}