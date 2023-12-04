
import { useState } from "react";
import BrowseHeader from "../components/browseheader";
import Item from "../components/item";
import Menubar from "../components/menubar";
import Searchbar from "../components/searchbar";
import {data} from '../productlist'


export default function CategoryPage(){
  let [search, setSearch] = useState('')
  let [category, setCategory] = useState('Laptops')
  let [toggle, setToggle] = useState(true)
    return(
        <>
        <Menubar searchbarOnChange={(e)=>setSearch(e.target.value)}/>
        <div className="sizedbox"></div>
        <div className="searchbar_container">
          <Searchbar id="lower" onChange={(e)=>setSearch(e.target.value)} classtype="lower_searchbar searchbar"/>
        </div>
        <BrowseHeader click={()=>{toggle?setToggle(false):setToggle(true); toggle?setCategory('Phones'):setCategory('Laptops')}} text="Browse All" tag="" btn_text={category}/>
        <div className="wrapper">
            <div className="item_container">
              
              {data.filter((item)=>{
                return search.toLowerCase() === '' ? 
                item.keywords.toLowerCase().includes(category.toLowerCase())
                 : 
                 item.keywords.toLowerCase().includes(search.toLowerCase())
              }).map((item) => (
              <Item key={item.id} img ={item.img} name={item.product_name} price={item.price} review={item.rating} count={item.count +" "+"Reviews"}/>
              ))}
            </div>
          </div>
          <div className="empty"></div>
        
        </>
    )
}