import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ProductCard from '@/components/ProductCard';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data.products);
        setLoading(false);
      });
  }, []);

  const filtered = products.filter(p => p.title.toLowerCase().includes(query.toLowerCase()));

  function ProductSkeleton() {
    return (
      <div className="bg-gray-100 p-4 rounded-md shadow-md border border-gray-200 animate-pulse mt-5">
        <div className="h-44 w-full bg-gray-300 mb-4 rounded"></div>
        <div className="h-6 bg-gray-300 rounded mb-2 w-3/4"></div>
        <div className="h-5 bg-gray-300 rounded mb-2 w-1/2"></div>
        <div className="h-10 bg-gray-300 rounded w-full"></div>
      </div>
    );
  }

  return (
    <>
    <Header />
    <div className="md:px-10 py-10 px-5">
      <input 
        className="border p-2 w-full rounded-md" 
        placeholder="Search" 
        onChange={e => setQuery(e.target.value)} 
      />
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 md:gap-10 gap-5 mt-5">
        {loading
          ? Array.from({ length: 12 }).map((_, index) => <ProductSkeleton key={index} />)
          : filtered.map(product => <ProductCard key={product.id} product={product} />)}
      </div>
    </div>
    <Footer />
    </>
  );
}