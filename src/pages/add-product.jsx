import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { isAuthenticated } from '../utils/auth';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AddProduct() {
  const router = useRouter();
  const [form, setForm] = useState({ title: '', description: '', price: '', rating: '' });

  useEffect(() => {
    if (!isAuthenticated()) router.push('/login');
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Product Added!');
    console.log(form);
  };

  return (
    <>
        <Header />
        <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto">
            {['title', 'description', 'price', 'rating'].map((f) => (
                <input key={f} required placeholder={f} className="mb-2 p-2 border w-full" onChange={(e) => setForm({ ...form, [f]: e.target.value })} />
            ))}
            <button type="submit" className="bg-blue-500 text-white px-4 py-2">Add Product</button>
        </form>
        <Footer />
    </>
  );
}
