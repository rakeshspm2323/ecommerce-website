import { useState } from 'react';
import { useRouter } from 'next/router';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from "next/image";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await fetch('https://reqres.in/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (data.token) {
      localStorage.setItem('token', data.token);
      router.push('/');
    } else {
      alert('Login failed');
    }
  };

  return (
    <>
  <Header />

  {/* Image with login form over it */}
  <div className="relative w-full md:h-[600px] h-[500px]">
    <Image 
      src="/assets/image4.jpg"
      alt="Background"
      layout="fill"
      objectFit="cover"
      className="w-full h-full"
    />
    {/* Login form positioned over the image */}
    <div className="absolute inset-0 flex justify-center items-center">
      <div className='md:px-10 py-10 px-5 bg-white shadow-md rounded-xl max-w-md w-full mx-5'>
        <form onSubmit={handleLogin} className='space-y-5'>
          <h3 className='text-2xl text-center font-semibold'>Login Form</h3>
          <div className="flex justify-center items-center">
            <Image
              src="/assets/logoCampus.png"
              className="object-cover"
              alt="logo"
              width={100}
              height={100}
            />
          </div>
          <input 
            type="email" 
            placeholder="Email" 
            onChange={(e) => setEmail(e.target.value)} 
            className="p-2 border w-full rounded-md" 
            required 
          />
          <input 
            type="password" 
            placeholder="Password" 
            onChange={(e) => setPassword(e.target.value)} 
            className="p-2 border w-full rounded-md" 
            required 
          />
          <button 
            type="submit" 
            className="bg-teal-500 text-white px-4 py-2 rounded-md w-full hover:bg-teal-400"
          >
              Login
          </button>
        </form>
      </div>
    </div>
  </div>
  <Footer />
</>

  );
}