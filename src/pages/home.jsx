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
        <div className="sizedbox"></div>
        <div className="searchbar_container">
          <Searchbar class="lower_searchbar searchbar"/>
        </div>
        <main>
          <Heading text = "Discover" tag="Black Friday Sales"/>
          <div className="wrapper">
            <div className="item_container">
              <Item img="/laptops.png" name = "Laptops" offer = "70% Off"/>  
              <Item img="/smartphones.jpg" name = "Smartphones" offer = "50% Off"/>  
              <Item img="/shoes.jpg" name = "Shoes" offer = "40% Off"/>  
              <Item img="/clothing.jpg" name = "Clothing" offer = "60% Off"/>
            </div>
          </div>
          <div className="sizedbox"></div>
          <Heading text = "Explore" tag=""/>
          <div className="wrapper">
            <div className="item_container">
              <Item img="/decoratives.jpeg" name = "Decoratives" offer = ""/>
              <Item img="/jackets.png" name = "Jackets" offer = ""/>   
              <Item img="/perfumes.jpg" name = "Perfumes" offer = ""/>
              <Item img="/accessories.jpg" name = "Accessories" offer = ""/>   
              
            </div>
          </div>
        </main>
        <footer></footer>
        <div className="empty"></div>
        </>
    )
}