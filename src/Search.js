import useFetch from './useFetch';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Search = ({blogs,keyword}) => {
    const [searchValue,setSearchValue]=useState("");
    
    return (
        <div className="blog-list">
            {blogs.filter((val)=>
            {
                if(keyword=="")
                {
                    
                    return val
                }
                else if(val.title.toLowerCase().includes(keyword.toLowerCase())){
                    return val
                }
            }).map((blog)=>(
                <div className="blog-preview" key={blog.id}>
                    <Link to={`blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>{blog.author}</p>
                    </Link>

                </div>
            ))}
        </div>
      );
}
 
export default Search;