import '../utils.css'

export default function BrowseHeader(props){
    return(
        <>
        <div className="browse_header">
            <div className='text'>
                <h1 className="heading">{props.text}</h1>
                <p className="tag">{props.tag}</p>
            </div>
            <div className='filters'>
                <button>
                    Filters
                </button>
            </div>
          </div>
        </>
    )
}