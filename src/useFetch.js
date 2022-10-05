import {useState,useEffect} from 'react';

const useFetch=(url)=>{
    const [data,setData]=useState(null);
    const [isLoading, setLoading]=useState(true);
    const [errormessage,setError]=useState(null);

    useEffect(()=>
        {   
            const abortCont=new AbortController();

            setTimeout(()=>
            {
            fetch(url,{signal:abortCont.signal})
            .then(res=>{
                if(!res.ok)
                {
                    throw Error("Could not fetch the resource");
                }
                return res.json();
            })
            .then(data=>{
                setLoading(false);
                setData(data);  
                setError( null);
            })
            .catch(err=>{
                if(err.name==="AbortError")
                {
                    console.log("Fetch Aborted");
                }
                else
                {
                    console.log("Fake error");  
                    setLoading(false);
                    setError(err.message);
                }
            })
            },500
            );
            return ()=>abortCont.abort();
        },[url]);  
    return {data,isLoading,errormessage};
    
}  

export default useFetch;