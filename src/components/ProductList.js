import { useEffect, useState } from "react"

const ProductList = ({ }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await fetch('http://localhost:8080/product');
        const data = await response.json();
        setProducts(data);
    }
    return (
        <div>
            <table className=" table is-striped">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product,index) => (
                        <tr key={product.id}>
                            <td>{index + 1}</td>
                            <td>{product.title}</td>
                            <td>{product.price}</td>
                            <td>
                                <button className= "button is-small is-info">EDIT</button>
                                <button className= "button is-small is-danger">DELEATE</button>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}

export default ProductList