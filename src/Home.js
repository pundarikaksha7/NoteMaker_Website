import { Link } from 'react-router-dom';
import BlogList from './BlogList';
import useFetch from './useFetch';
import { useState } from 'react';
import Search from './Search';


const Homepage = () => {
    const {data:blogs,isLoading,errormessage}=useFetch("http://localhost:8000/blogs");
    const [searchValue,setSearchValue]=useState("");
    const [finalValue,setFinalValue]=useState("");
    const handleChange=(e)=>
    {
        e.preventDefault();
        setSearchValue(e.target.value);
    }
    
    return ( 

        <div className="home" >
            <div className="search-bar">
                <input type="text" 
                placeholder='Search a note'
                value={searchValue}
                onChange={handleChange}/>
            </div>
            {errormessage && <div>{errormessage}</div>}
            {isLoading && <div>Loading...</div>}
            {blogs && <Search blogs={blogs} keyword={searchValue}/>}
            {blogs && (<Link to="/create">
                <button>Add Note +</button>
            </Link>)}
            
            
        </div>
     );
}
 
export default Homepage;