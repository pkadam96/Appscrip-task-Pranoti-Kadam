import { useEffect, useState } from 'react';
import '../css/products-section.css';
import { Sidebar } from './Sidebar';

const ProductsSection = () => {
    const [products, setProducts] = useState([]);
    const [sidebarVisible, setSidebarVisible] = useState(true); 

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('https://fakestoreapi.com/products');
            const data = await res.json();
            setProducts(data);
        }
        fetchData();
    }, [])

    const toggleSidebar = () => {
        setSidebarVisible(prevState => !prevState);
    }

    return (
        <section className='container'>
            <div className='filter'>
                <div>
                    <span>{products.length} ITEMS</span>
                    <span onClick={toggleSidebar} className='toggle-filter'>
                        {sidebarVisible ? (
                            <>
                                <i className="fa-solid fa-chevron-left   "></i> <u>HIDE FILTER</u>
                            </>
                        ) : (
                            <>
                                <i className="fa-solid fa-chevron-right  "></i><u> SHOW FILTER</u>
                            </>
                        )}
                    </span>
                </div>
                <p>RECOMMENDED</p>
            </div>
            <div className='main'>
                {sidebarVisible && (
                    <div className='sidebar'>
                        <Sidebar />
                    </div>
                )}
                <div className={`products-container ${sidebarVisible ? 'with-sidebar' : 'without-sidebar'}`}>
                    {products.map(product => (
                        <div key={product.id} className='product-card'>
                            <div className='image'>
                                <img src={product.image} alt={product.title} />
                            </div>
                            <h1>{product.title}</h1>
                            <p>Rs {product.price}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export { ProductsSection };
