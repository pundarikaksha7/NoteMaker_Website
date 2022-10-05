import { Link } from 'react-router-dom';
import BlogList from './BlogList';
import useFetch from './useFetch';


const Homepage = () => {
    const {data:blogs,isLoading,errormessage}=useFetch("http://localhost:8000/blogs");
    return ( 

        <div className="home" >
            {errormessage && <div>{errormessage}</div>}
            {isLoading && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Notes" />}
            {blogs && (<Link to="/create">
                <button>Add Note +</button>
            </Link>)}
            
            
        </div>
     );
}
 
export default Homepage;