import { useEffect, useState } from 'react';
import '../css/products-section.css';
import { Sidebar } from './Sidebar';
import heartIcon from '../images/heart.png'; 
import pinkHeartIcon from '../images/redheart.png';

const ProductsSection = () => {
    const [products, setProducts] = useState([]);
    const [sidebarVisible, setSidebarVisible] = useState(true);
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [selectedOption, setSelectedOption] = useState('RECOMMENDED');
useEffect(() => {
    const fetchData = async () => {
        try {
            const res = await fetch('https://dummyjson.com/products');
            const data = await res.json();
            const productsWithLikes = data.products.map(product => ({
                ...product,
                isLiked: false
            })); 
            setProducts(productsWithLikes); 
            console.log(productsWithLikes);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };
    fetchData();
}, []);


    const toggleSidebar = () => {
        setSidebarVisible(prevState => !prevState);
    };

    const toggleLike = (id) => {
        setProducts(products.map(product =>
            product.id === id ? { ...product, isLiked: !product.isLiked } : product
        ));
    };

    const toggleDropdown = () => {
        setDropdownVisible(prevState => !prevState);
    };

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        setDropdownVisible(false);
    };

    return (
        <section className='container'>
            <div className='filter'>
                <div>
                    <span>{products.length} ITEMS</span>
                    <span onClick={toggleSidebar} className='toggle-filter'>
                        {sidebarVisible ? (
                            <>
                                <i className="fa-solid fa-chevron-left"></i> <u>HIDE FILTER</u>
                            </>
                        ) : (
                            <>
                                <i className="fa-solid fa-chevron-right"></i><u> SHOW FILTER</u>
                            </>
                        )}
                    </span>
                </div>
                <div className='recommended-section'>
                    <p onClick={toggleDropdown} className='recommended'>
                        {selectedOption}
                        <i className={`fa-solid fa-chevron-${dropdownVisible ? 'up' : 'down'}`}></i>
                    </p>
                    {dropdownVisible && (
                        <div className='dropdown-menu'>
                            {['RECOMMENDED', 'NEWEST FIRST', 'POPULAR', 'PRICE: HIGH TO LOW', 'PRICE: LOW TO HIGH'].map(option => (
                                <div
                                    key={option}
                                    className={`dropdown-item ${selectedOption === option ? 'selected' : ''}`}
                                    onClick={() => handleOptionSelect(option)}
                                >
                                    <p>{option}</p>
                                    {selectedOption === option && <i className="fa-solid fa-check check-icon"></i>}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
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
                                <img src={product.images[0]} alt={product.title} />
                            </div>
                            <h1>{product.title}</h1>
                            <div className='product-details'>
                                <p>$ {product.price}</p>
                                <img
                                    src={product.isLiked ? pinkHeartIcon : heartIcon}
                                    alt="heart"
                                    className='heart-icon'
                                    onClick={() => toggleLike(product.id)}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export { ProductsSection };



