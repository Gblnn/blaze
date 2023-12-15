import '../styles.css'
import '../utils.css'
import Item from '../components/item'
import Menubar from '../components/menubar'
import Searchbar from '../components/searchbar'
import BrowsePage from '../pages/browsepage'
import { useState } from 'react'
import BrowseHeader from '../components/browseheader'
import {data} from '../productlist'

export default function CategoryPage(){

  const [show, setShow] = useState(false)
  const [hide, setHide] = useState(true)

  const handleClick = () => {
    setShow(true);
    setHide(true);
  }

  let [search, setSearch] = useState('')
  let [category, setCategory] = useState('Laptops')
  let [toggle, setToggle] = useState(true)



    return(
        <>
        <Menubar searchbarOnChange={(e)=>{setSearch(e.target.value);e===""?setHide(false):setHide(true)}}/> 
          <>
          
          <div className="sizedbox"></div>
          <div className="searchbar_container">
          <Searchbar id="lower" onChange={(e)=>{setSearch(e.target.value);e===""?setHide(false):setHide(true)}} classtype="lower_searchbar searchbar"/>
          </div>
          <main>
          {/* <Heading text = "Featured" tag="50% Off Sales"/> */}
          <BrowseHeader nav = {false} click={()=>{toggle?setToggle(false):setToggle(true); toggle?setCategory('Phones'):setCategory('Laptops')}} text="Browse All" tag="50% Off" btn_text={category}/>
          

          {
            hide ? null :
            <>
            <div className='container'>
            <div className="item_container">
            <Item img="/laptops.png" name = "Laptops" offer = "70% Off" clickFunction={()=>{}} item_page="/browse"/>  
            <Item img="/smartphones.jpg" name = "Smartphones" offer = "50% Off" item_page=""/>  
            <Item img="/shoes.jpg" name = "Shoes" offer = "40% Off"/>  
            <Item img="/clothing.jpg" name = "Clothing" offer = "60% Off"/>
            <Item img="/perfumes.jpg" name = "Perfumes" offer = ""/>
            <Item img="/accessories.jpg" name = "Accessories" offer = ""/>
            <Item img="/decoratives.jpeg" name = "Decoratives" offer = ""/>
              <Item img="/jackets.png" name = "Jackets" offer = ""/>  
          </div>
          </div>
          <div className="empty"></div>
            </>
            
          }
          
          
          <div className='container'>
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
          
          
          
          
          {/* <div className="sizedbox"></div>
          <Heading text = "Explore" tag=""/>
          <div className="wrapper">
            <div className="item_container">
              <Item img="/decoratives.jpeg" name = "Decoratives" offer = ""/>
              <Item img="/jackets.png" name = "Jackets" offer = ""/>   
              <Item img="/perfumes.jpg" name = "Perfumes" offer = ""/>
              <Item img="/accessories.jpg" name = "Accessories" offer = ""/>   
            </div>
          </div> */}
          </main>
          </>
          
        
        
        <footer></footer>
        <div className="empty"></div>
        </>
    )
}