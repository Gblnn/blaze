import { useNavigate } from 'react-router-dom'
import '../utils.css'
import '../styles.css'

export default function BrowseHeader(props){
    let navigate = useNavigate()
    return(
        <>
        <div className="browse_header">
            <div className='text'>
                <button onClick={()=>navigate(-1)}>
                <svg className="title_logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z" clipRule="evenodd" />
                </svg>
                </button>
                
                <h1 className="heading">{props.text}</h1>
                <p className="tag">{props.tag}</p>
            </div>
            <div className='filters'>
                <button className='filter_btn' onClick={props.click}>
                <p className='p'>{props.btn_text}</p>
                </button>
                
            </div>
          </div>
        </>
    )
}