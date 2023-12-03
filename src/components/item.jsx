import '../utils.css'

export default function Item(props){
    return(
        <>
        <div className="item_box">
            <div className="item_img_container">
              {/* <img/> */}
            </div>
            <div className="item_box_footer">
              <h1 className="item_name">{props.name}</h1>
              <div className="price">
                <p className="offer_tag">{props.offer}</p>
              </div>
            </div>
          </div>
        </>
    )
}