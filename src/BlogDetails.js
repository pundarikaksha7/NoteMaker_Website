import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";

const BlogDetails = () => {

    const {id}=useParams();
    const {data:blog,isLoading,errormessage}=useFetch("http://localhost:8000/blogs/"+id);
    const history= useHistory();
    const handleClick=()=>
    {
        fetch("http://localhost:8000/blogs/"+blog.id,{
            method:"DELETE"
        }).then(()=>
        {
            history.push("/");
        })
    }
    return ( 
        <div className="blog-details">
            {isLoading && <div>Loading...</div>}
            {errormessage && <div>{errormessage}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>{blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleClick}>Delete Note</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;