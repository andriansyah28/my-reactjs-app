import { useState , useEffect} from "react";
import { useNavigate, useParams} from 'react-router-dom';
 
const EditProduct = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const history = useNavigate();
    const { id } = useParams();

    useEffect(() => { 
        getProductById();
    }, []); 
    
    const getProductById = async () => {
        const response = await fetch(`http://localhost:8080/product/${id}`);
        const kopet = await response.json();
        setTitle(kopet.title);
        setPrice(kopet.price);
    } 
    const saveProduct = async(e) => {
        e.preventDefault();
        const product = { title, price };
        await fetch('http://localhost:8080/product',{
            method: "POST",
            body: JSON.stringify(product),
            headers:{
                'Content-Type': 'application/json'
            }
        });
        history("/");
    }
 
    return (  
        <div>
            <form onSubmit={saveProduct}>
                <div className="field">
                <label className="label">Title</label>
                <div className="control">
                    <input className="input" value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Title" />
                </div>
                </div>
 
                <div className="field">
                <label className="label">Price</label>
                <div className="control">
                    <input className="input" value={price} onChange={(e) => setPrice(e.target.value)} type="text" placeholder="Price" />
                </div>
                </div>
         
                <div className="field">
                <div className="control">
                    <button className="button is-primary">Update</button>
                </div>
                </div>
            </form>
        </div>
    )
}
 
export default EditProduct