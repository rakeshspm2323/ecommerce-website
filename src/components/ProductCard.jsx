import { useCart } from '@/context/CartContext';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductCard({ product }) {
  const { cartItems, addToCart, incrementQuantity, decrementQuantity } = useCart();
  const cartItem = cartItems.find(item => item.id === product.id);
  console.log("product",product);
  
  return (
    <div className="relative bg-[#fcfcfc] p-4 rounded-md shadow-md hover:shadow-xl border border-gray-200 mt-5">   
      <Link href={`/product/${product.id}`}>
        <Image 
            className="relative lg:h-52 h-44 w-full object-contain  hover:scale-110 transition duration-300 ease-in-out"
            src={product.thumbnail} 
            alt={product.title} width={100} 
            height={100} 
        />
      </Link>
      <div className='flex flex-col justify-between gap-2 pt-3 pb-1 border-t border-gray-300'>
        <h2 className="text-sm text-gray-500 font-bold">{product?.brand}</h2>
        <Link href={`/product/${product.id}`} className="hover:text-blue-500">
          <h2 className="text-md font-bold">{product?.title}</h2>
        </Link>
        <div className='lg:flex justify-between items-center'>
          <p className='text-xl font-semibold lg:mb-0 mb-3'>${product?.price}</p>
          {cartItem ? (
            <div className="flex items-center gap-3 bg-green-500 text-white px-2 py-2 rounded-md lg:w-auto w-full justify-between">
              <button
                className="cursor-pointer h-full w-7"
                onClick={() => decrementQuantity(product?.id)}
              >
                -
              </button>
              <span className="font-medium">{cartItem?.quantity}</span>
              <button
                className="cursor-pointer w-7 h-full"
                onClick={() => incrementQuantity(product?.id)}
              >
                +
              </button>
            </div>
          ) : (
            <button
              onClick={() => addToCart(product)}
              className="px-4 py-2 rounded-md cursor-pointer lg:w-auto w-full border border-teal-500 text-sm"
            >
              Add To Cart
            </button>
          )}
      </div>
      <h5 className="text-sm text-gray-500">Item Stock : {product?.stock}</h5>
      </div>
      <p className='absolute top-1 right-1'>
        {Array.from({ length: Math.ceil(product?.rating) }, (_, index) => (
          <FontAwesomeIcon
            key={index}
            icon={faStar}
            className="text-orange-500"
          />
        ))}
      </p>
     </div>
  );
}