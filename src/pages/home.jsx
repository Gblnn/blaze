import '../styles.css'
import '../utils.css'
import Item from '../components/item'
import Menubar from '../components/menubar'
import Searchbar from '../components/searchbar'
import Heading from '../components/heading'

export default function Home(){
    return(
        <>
        <Menubar/>
        <div className="searchbar_container">
          <Searchbar class="lower_searchbar searchbar"/>
        </div>
        <main>
          <Heading text = "Discover" tag="Black Friday Sales"/>
          <div className="wrapper">
            <div className="item_container">
              <Item name = "Laptops" offer = "70% Off"/>  
              <Item name = "Smartphones" offer = "50% Off"/>  
              <Item name = "Shoes" offer = "40% Off"/>  
              <Item name = "Clothing" offer = "60% Off"/>
            </div>
          </div>
          <Heading text = "Explore" tag=""/>
          <div className="wrapper">
            <div className="item_container">
              <Item name = "Accessories" offer = ""/>  
              <Item name = "Decoratives" offer = ""/>  
              <Item name = "Perfumes" offer = ""/>  
              <Item name = "Jackets" offer = ""/>
            </div>
          </div>
        </main>
        <footer></footer>
        <div className="empty"></div>
        </>
    )
}