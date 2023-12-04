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
                
                <svg className='svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                    <path fillRule="evenodd" d="M3.792 2.938A49.069 49.069 0 0112 2.25c2.797 0 5.54.236 8.209.688a1.857 1.857 0 011.541 1.836v1.044a3 3 0 01-.879 2.121l-6.182 6.182a1.5 1.5 0 00-.439 1.061v2.927a3 3 0 01-1.658 2.684l-1.757.878A.75.75 0 019.75 21v-5.818a1.5 1.5 0 00-.44-1.06L3.13 7.938a3 3 0 01-.879-2.121V4.774c0-.897.64-1.683 1.542-1.836z" clipRule="evenodd" />
                </svg>
                <p>Filters</p>
                
                
            </div>
          </div>
        </>
    )
}