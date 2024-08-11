import { useEffect, useState } from 'react';
import '../css/products-section.css';
import { Sidebar } from './Sidebar';

const ProductsSection=()=>{
    const[products, setProducts] = useState([]);

    useEffect(()=>{
        const fetchData = async () =>{
            const res = await fetch('https://fakestoreapi.com/products');
            const data = await res.json();
            setProducts(data);
        }
        fetchData();
    },[])

    return(
        <section className='container'>
            <div className='filter'>
                <div>
                    <span>{products.length} ITEMS</span>
                    <span>HIDE FILTER</span>
                </div>
                <p>RECOMMENDED</p>
            </div>
            <div className='main'>
                <div className='sidebar'>
                    <Sidebar/>
                </div>
                <div className='products-container'>
                {
                    products.map(product =>(
                        <div key={product.id} className='product-card'>
                            <div className='image'>
                                <img src={product.image} alt={product.title} />
                            </div>
                            <h1>{product.title}</h1>
                            <p>Rs {product.price}</p>
                        </div>
                    ))
                }
            </div>
            </div>
        </section>
    )
}
export {ProductsSection};