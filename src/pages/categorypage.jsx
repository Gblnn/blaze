
import BrowseHeader from "../components/browseheader";
import Item from "../components/item";
import Menubar from "../components/menubar";
import Searchbar from "../components/searchbar";
import {data} from '../productlist'

export default function CategoryPage(){
    return(
        <>
        <Menubar/>
        <div className="sizedbox"></div>
        <div className="searchbar_container">
          <Searchbar class="lower_searchbar searchbar"/>
        </div>
        <BrowseHeader text="Browse All" tag="promotional"/>
        <div className="wrapper">
            <div className="item_container">
            {data.map((item) => (
            <Item img ={item.img} name={item.product_name} price={item.price} review={item.rating} count={item.count}/>
            ))}
            </div>
          </div>
          <div className="empty"></div>
        
        </>
    )
}