
import '../utils.css'
import Searchbar from './searchbar'
import TitleMenu from './titlemenu'
import Title from './title'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Menubar(){
    const [show, setShow] = useState(false)
    return(
        <>
        <header>
            <div className="header_container">
                <Title/>
                <Searchbar classtype="top_searchbar searchbar"/>

                <div className="right">
                    <button className="cart_btn">
                        <Link to="/cart">
                        <svg className="cart_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" >
                        <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z" clipRule="evenodd" />
                        </svg>
                        </Link>
                    </button>

                    <button className="cart_btn" onClick={()=>setShow(!show)}>
                    <svg className="cart_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" >
                        <path fillRule="evenodd" d="M10.5 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" clipRule="evenodd" />
                    </svg>
                    </button>
                    {
                        show? <TitleMenu/> : null
                    }
                </div>
            </div>
        </header>
        </>
    )
}