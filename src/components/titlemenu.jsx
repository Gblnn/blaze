import '../utils.css'

export default function TitleMenu(){
    return(
        <>
        <div className="menu_dropdown" id="menu"> 
              <div className="menu_item">
                <button>
                  <a className="menu_text">Profile</a>
                </button>
              </div>
              <div className="menu_item">
                <button>
                  <a className="menu_text">Settings</a>
                </button>
              </div>
              <div className="menu_item">
                <button id ="theme-btn">
                  <a className="menu_text">Switch theme</a>
                </button>
              </div>
              <div className="menu_item">
                <button>
                  <a className="menu_text">Preferences</a>
                </button>
                
              </div>
              <div className="menu_item">
                <button>
                  <a className="menu_text">Settings</a>
                </button>
              </div>
            </div>
        </>
    )
}