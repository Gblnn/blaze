import { Link } from 'react-router-dom'
import '../utils.css'

export default function Item(props){
    return(
        <>
        <Link to={props.item_page}>
        <div className="item_box">
            <div className="item_img_container">
              <img className='item_img' src={props.img}/>
            </div>
            <div className="item_box_footer">
              <h1 className="item_name">{props.name}</h1>
              <div className="price">
                <p className="offer_tag">{props.offer}</p>
              </div>
            </div>
          </div>
        </Link>
        
        </>
    )
}