import { Link } from "react-router-dom";

export default function Cart(){
    return(
        <>
        <header>
        <div class="header_container">
          <Link to="/">
              <div class ="title_container">
                  <svg class="title_logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path fill-rule="evenodd" d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z" clip-rule="evenodd" />
                    </svg>
                    
                  <svg class="title_logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                    </svg>
                                  
                <h1 class="cart_heading title">Cart</h1>
              </div>
          </Link>
          
          
          {/* <div class="right">
            <a class="nav_item">PROFILE</a>
            <a class="nav_item">ABOUT</a>
            
            
            <div class="menu_dropdown" id="menu"> 
              <div class="menu_item">
                <a class="menu_text">Profile</a>
              </div>
              <div class="menu_item">
                <a class="menu_text">Settings</a>
              </div>
              
            </div>
            
            
            
          </div> */}
        </div>
      </header>
      
      <main>
        <div class="empty_placeholder">
          <p class="empty_text">Cart is empty.</p>
        </div>
        
      </main>
      <footer></footer>
        </>
    )
}