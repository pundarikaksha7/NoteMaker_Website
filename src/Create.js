import {useState} from "react";
import {useHistory} from 'react-router-dom';
const Create = () => {

    const [title,setTitle]=useState("");    
    const [body,setBody]=useState("");    
    const [author,setAuthor]=useState("");
    const [isAdding,setisAdding]=useState(false);
    const history=useHistory();



    const handleSubmit =(e)=>
    {
        e.preventDefault();
        const blog={title,body,author};

        setisAdding(true);
        fetch("http://localhost:8000/blogs",
            {   method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(blog)
            }).then(()=>{
                setisAdding(false);
                history.push('/');
            })
        
    }
    return ( 
        <div className="create">
            <h2>Add a new note</h2>
            <form onSubmit={handleSubmit}>
                <label>Note title </label>
                <input 
                    type="text"
                    required
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                />
                <label>Write your note here </label>
                <textarea
                    required
                    value={body}
                    onChange={(e=>setBody(e.target.value))}
                >
                </textarea>
                <label>Note author </label>
                <input
                    value={author}
                    onChange={(e=>setAuthor(e.target.value))}
                >
                </input>
                {!isAdding &&<button>Add Note</button>}
                {isAdding &&<button disabled>Adding note...</button>}
            </form>
        </div>
     );
}
 
export default Create;