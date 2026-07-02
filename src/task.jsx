import { useState,useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function Task () {
    const [search,setSearch] = useState("");
    const [products,setProducts] = useState([]);
    const [result,setResult] = useState([]);
    useEffect(()=>{
        fetchProducts();
    },[]);
    const fetchProducts = async () =>{
         try {
            const res = await axios.get("http://localhost:3002/products");
            setProducts(res.data);
         }catch(error){
            console.log(error);
         }
    }
    const handleSearch = (e) =>{
        const value = e.target.value;
        setSearch(value);
        if(!value.trim()){
             setResult([]);
             return;
        }
        const filtered = products.filter((item)=>
            item.title.toLowerCase().includes(value.toLowerCase())
        );
        setResult(filtered);
    }
    return(
       <div>
         <input type="text"
         placeholder="search here..."
         value={search}
         onChange={handleSearch} />
         {search && (
            <div>
                {result.map((item)=>(
                    <Link key={item.id}
                    to={`/products/${item.id}`}>
                        <div>
                            {item.title}
                        </div>
                    </Link>
                ))}
            </div>
         )}
       </div>
       
    );
}
export default Task;