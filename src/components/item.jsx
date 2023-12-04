import { Link } from 'react-router-dom'
import '../utils.css'

export default function Item(props){
    return(
        <>
        <Link to={props.item_page} onClick={()=>{console.log(props.name)}}>
        <div className="item_box">
            <div className="item_img_container">
              <img className='item_img' src={props.img}/>
            </div>
            <div className="item_box_footer">
              <div className='item_row'>
                <h1 className="item_name">{props.name}</h1>
                <div className="price">
                <p className="offer_tag">{props.offer}</p>
                <p className=''>{props.price}</p>
                </div>
              </div>
              <div className='item_row'>
                <p className="tag">{props.review}</p>
                <div className="price">
                <p className='item_desc'>{props.count}</p>
                </div>
              </div>
              
              
            </div>
          </div>
        </Link>
        
        </>
    )
}