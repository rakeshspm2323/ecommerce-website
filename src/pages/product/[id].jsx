import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useCart } from '../../context/CartContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ProductDetail() {
  const { query } = useRouter();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    if (query.id) {
      fetch(`https://dummyjson.com/products/${query.id}`)
        .then(res => res.json())
        .then(data => setProduct(data));
    }
  }, [query.id]);

  if (!product) return <div>Loading...</div>;

  return (
    <>
      <Header /> 
      <div className="container mx-auto py-10">
        <Image 
          src={product.thumbnail} 
          className="h-60 mb-4"
          width={200}
          height={200}
          alt={product.title}  
        />
        <h1 className="text-xl font-bold mb-3">{product.title}</h1>
        <p>{product.description}</p>
        <p>
          {Array.from({ length: Math.ceil(product.rating) }, (_, index) => (
            <FontAwesomeIcon
              key={index}
              icon={faStar}
              className="text-orange-500 mr-2 my-3"
            />
          ))}
        </p>
        <div className='lg:flex justify-between items-center'>
          <p className='text-xl font-semibold'>${product.price}</p>
          <button 
            onClick={() => addToCart(product)} 
            className=" bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-400 cursor-pointer"
          >
            Add to Cart
          </button>
        </div>
      </div> 
      <Footer />
    </>
  );
}
