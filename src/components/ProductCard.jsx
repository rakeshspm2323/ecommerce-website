import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductCard({ product }) {
  
  return (
    <div className="relative bg-[#fcfcfc] p-4 rounded-md shadow-md hover:shadow-xl border border-gray-200 mt-5">   
      <Link href={`/product/${product.id}`}>
        <Image 
            className="relative lg:h-52 h-44 w-full object-contain border-b border-gray-300"
            src={product.thumbnail} 
            alt={product.title} width={100} 
            height={100} 
        />
      </Link>
      <div className='flex flex-col justify-between gap-3 pt-3 pb-1'>
        <h2 className="text-lg font-bold">{product.title}</h2>
        <div className='lg:flex justify-between items-center'>
          <p className='text-xl font-semibold'>${product.price}</p>
          <Link href={`/product/${product.id}`}>
            <button 
              className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-400 cursor-pointer lg:w-auto w-full"
            >
              View Details
            </button>
          </Link>
        </div>
      </div>
      <p className='absolute top-1 right-1'>
        {Array.from({ length: Math.ceil(product.rating) }, (_, index) => (
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