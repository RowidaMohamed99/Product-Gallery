import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Loading from '../../components/Loading/Loading';

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
  async function getProduct() {
    const option = {
      url: `https://fakestoreapi.com/products/${id}`,
      method: "GET",
    };
    console.log(option);
    try {
      const { data } = await axios.request(option);
      setProduct(data);
    } catch (err) {
      console.error("Error", err);
    }
  }

  if (id) getProduct();
}, [id]);


  if (!product) return <div className="p-6"><Loading /></div>;

  return <>
    <div className="p-12 mt-9 container mx-auto dark:bg-gray-900 dark:text-white">
      <Link to="/" className="text-primary underline">
      <i className="fa-solid fa-circle-arrow-left fa-fade text-5xl text-pink-700 "></i>
      </Link>
      <div className="mt-6 flex flex-col md:flex-row  gap-4 py-5">
        <img src={product.image} alt={product.title} className="h-64 object-contain mx-auto mb-4" />
        <div>
          <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
          <div className='flex mb-2'>
            <h4 className="text-primary-500 rounded-lg bg-gray-200 text-sm font-normal px-2 py-1">{product.category}</h4>
            <h4 className="text-primary-500 rounded-lg text-pink-700 text-sm font-bold px-2 py-1">{product.rating.count}reviews</h4>
            </div>
          
          <p className="mb-4 ">{product.description}</p>
        <div className='flex justify-between items-center mb-2'>
            <p className="text-primary text-xl font-semibold pt-3">${product.price}</p>
            <h4 className="text-primary-500 rounded-lg text-pink-700 text-xl font-bold ">{product.rating.rate}
            <i className="fa-solid fa-star text-pink-700 text-sm font-bold"></i>
                </h4>
        </div>
      </div>
      </div>
    </div>
  </>;
}

