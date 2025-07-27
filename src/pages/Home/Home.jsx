import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import FilterSort from './../../components/FilterSort/FilterSort';
import Loading from '../../components/Loading/Loading';

export default function Home() {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    // const [isDark, setIsDark] = useState(false);


async function getProducts(){
    const option= {
        url: "https://fakestoreapi.com/products",
        method: "GET",
    }
    console.log(option);
    try {
    let { data } = await axios.request(option);
    setProducts(data);
    setFilteredProducts(data);
    } catch (err) {
    console.error("Error", err);
    }finally {
        setLoading(false); 
    }
}


    useEffect (()=>{
    getProducts()
    }, [])

    const handleFiltered = useCallback((filtered) => {
    setFilteredProducts(filtered);
}, []);

    return <>

    <div className="pt-5 container mx-auto p-6 dark:bg-gray-900 dark:text-white-100">
        <FilterSort products={products} onFiltered={handleFiltered}/>
        {loading? (<Loading/>) : (
        <div className=" gap-4 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
        {filteredProducts.map(product => (
            <Link to={`/product/${product.id}`}
            key={product.id} 
            className=" p-4  hover:scale-105 transition ">
            <div className='card group/card rounded-lg overflow-hidden shadow-lg p-4 transition-shadow duration-500
            hover:shadow-pink-400 bg-white text-black dark:bg-gray-800 dark:text-white'>

            {/* IMAGE */}
            <img src={product.image} alt={product.title} className="h-40 object-contain mx-auto mb-4" />
            
            {/* TITLE */}
            <h3 to={`/product/${product.id}`}
            className="text-lg font-bold py-1 text-black-600 line-clamp-1- dark:text-white ">
            {product.title}
            </h3>

            {/* category */}
            <div className='flex justify-between items-center mb-2'>
            <h4 className="text-primary-500 rounded-lg bg-gray-200 text-sm font-normal px-2 py-1">{product.category}</h4>
            <h4 className="text-primary-500 rounded-lg text-pink-700 text-sm font-bold px-2 py-1">{product.rating.count}reviews</h4>
            </div>

            {/* description */}
            <p className="text-gray-500  text-sm line-clamp-3">{product.description}</p>
            


            {/* price */}
            <div className='flex justify-between items-center mb-2'>
                <p className="text-primary text-xl font-semibold pt-3">${product.price}</p>
                <h4 className="text-primary-500 rounded-lg text-pink-700 text-xl font-bold ">{product.rating.rate}
                    <i className="fa-solid fa-star text-pink-700 text-sm font-bold"></i>

                </h4>
            </div>
            </div>
            </Link>
        ))}
        </div>)}
        </div>
    {/* </div> */}
    </>;
}

