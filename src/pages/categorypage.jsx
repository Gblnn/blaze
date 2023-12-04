
import { useState } from "react";
import BrowseHeader from "../components/browseheader";
import Item from "../components/item";
import Menubar from "../components/menubar";
import Searchbar from "../components/searchbar";
import {data} from '../productlist'

export default function CategoryPage(){
  const [search, setSearch] = useState('')
    return(
        <>
        <Menubar searchbarOnChange={(e)=>setSearch(e.target.value)}/>
        <div className="sizedbox"></div>
        <div className="searchbar_container">
          <Searchbar onChange={(e)=>setSearch(e.target.value)} classtype="lower_searchbar searchbar"/>
        </div>
        <BrowseHeader text="Browse All" tag=""/>
        <div className="wrapper">
            <div className="item_container">
              
              {data.filter((item)=>{
                return search.toLowerCase() === '' ? item : item.keywords.toLowerCase().includes(search)
              }).map((item) => (
              <Item key={item.id} img ={item.img} name={item.product_name} price={item.price} review={item.rating} count={item.count}/>
              ))}
            </div>
          </div>
          <div className="empty"></div>
        
        </>
    )
}