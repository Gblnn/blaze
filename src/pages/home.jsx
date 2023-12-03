import { Link } from 'react-router-dom'
import '../styles.css'
import '../utils.css'

export default function Home(){
    return(
        <>
        <header>
          <div class="header_container">
          <div class ="title_container">
            <svg class = "title_logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path fill-rule="evenodd" d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z" clip-rule="evenodd" />
            </svg>
              <h1 class="title">Blaze</h1>
          </div>
          <input class=" top_searchbar searchbar" type="text" placeholder="Search Items"/>
          <div class="right">
            
            <button class="cart_btn">
              <Link to="/cart">
                <svg class="cart_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" >
                  <path fill-rule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z" clip-rule="evenodd" />
                </svg>
              </Link>
            </button>

            <button id="menu_btn" class="cart_btn">
              <svg class="cart_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" >
                <path fill-rule="evenodd" d="M10.5 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" clip-rule="evenodd" />
              </svg>
            </button>

            <div class="menu_dropdown" id="menu"> 
              <div class="menu_item">
                <button>
                  <a class="menu_text">Profile</a>
                </button>
              </div>
              <div class="menu_item">
                <button>
                  <a class="menu_text">Settings</a>
                </button>
              </div>
              <div class="menu_item">
                <button id ="theme-btn">
                  <a class="menu_text">Switch theme</a>
                </button>
              </div>
              <div class="menu_item">
                <button>
                  <a class="menu_text">Preferences</a>
                </button>
                
              </div>
              <div class="menu_item">
                <button>
                  <a class="menu_text">Settings</a>
                </button>
                
              </div>
              
            </div>
            
            
            
          </div>
        </div>
    </header>
    <div class="searchbar_container">
      <input class="lower_searchbar searchbar" type="text" placeholder="Search Items"/>
      
    </div>
    <main>
      
      <div class="items_heading">
        <svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path fill-rule="evenodd" d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z" clip-rule="evenodd" />
        </svg>
        
        
        <h1 class="heading">Discover</h1>
        <p class="tag">Black Friday Deals</p>
      </div>
      
      <div class="wrapper">
        <div class="item_container">
          <div class="item_box">
            <div class="item_img_container">
              
            </div>
            <div class="item_box_footer">
              <h1 class="item_name">Laptops</h1>
              <div class="price">
                <p class="offer_tag">50% Off</p>
                
              </div>
            </div>
          </div>
          <div class="item_box">
            <div class="item_img_container">
             
            </div>
            <div class="item_box_footer">
             
              <h1 class="item_name">Smartphones</h1>
              <div class="price">
                <p class="offer_tag">40% Off</p>
                
              </div>
            </div>
          </div>  
          <div class="item_box">
            <div class="item_img_container">
              
            </div>
            <div class="item_box_footer">
              
              <h1 class="item_name">Shoes</h1>
              <div class="price">
                <p class="offer_tag">40% Off</p>
                
              </div>
            </div>
          </div>
          <div class="item_box">
            <div class="item_img_container">
              
            </div>
            <div class="item_box_footer">
              
              <h1 class="item_name">Clothing</h1>
              <div class="price">
                <p class="offer_tag">70% Off</p>
                
              </div>
            </div>
          </div>  
          
        </div>
      </div>
      
      
    </main>
    <footer></footer>
    <div class="empty"></div>
        </>
    )
}