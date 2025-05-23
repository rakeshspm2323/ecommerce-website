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
      <div className='container mx-auto'>
        <div className="w-full h-[600px] flex justifuy-center items-center">
          <div className='p-10 bg-[#fcfcfc] shadow-md rounded-xl max-w-md mx-auto'>
            <form onSubmit={handleLogin}>
              <h3 className='text-2xl text-center font-semibold mb-5'>Login Form</h3>
              <div className="flex justify-center items-center mb-5">
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
                className="p-2 border w-full rounded-md mt-10" 
                required 
              />
              <button 
                type="submit" 
                className="bg-teal-500 text-white px-4 py-2 mt-10 rounded-md w-full cursor-pointer hover:bg-teal-400"
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