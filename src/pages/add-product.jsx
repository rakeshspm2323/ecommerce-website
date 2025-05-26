// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';
// import { isAuthenticated } from '../utils/auth';
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';
// import Breadcrumb from "@/components/BreadCrumnb";

// export default function AddProduct() {
//   const router = useRouter();
//   const [form, setForm] = useState({ title: '', description: '', price: '', rating: '' });

//   useEffect(() => {
//     if (!isAuthenticated()) router.push('/login');
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert('Product Added!');
//     console.log(form);
//   };

//   return (
//     <>
//         <Header />
//         <div className="pt-[55px]">
//         <Breadcrumb/>
//         <div className='container mx-auto pb-10'>
//           <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto">
//             {['title', 'description', 'price', 'rating'].map((f) => (
//                 <input key={f} required placeholder={f} className="p-2 border w-full mb-5 rounded-md capitalize text-sm" onChange={(e) => setForm({ ...form, [f]: e.target.value })} />
//             ))}
//             <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md ">Add Product</button>
//           </form>
//         </div>
//         </div>
//         <Footer />
//     </>
//   );
// }



import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { isAuthenticated } from '../utils/auth';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from "@/components/BreadCrumnb";
import { useCart } from '@/context/CartContext';
import Login from '@/components/Login';

export default function AddProduct() {
  const router = useRouter();
  const [form, setForm] = useState({ title: '', description: '', price: '', rating: '' });
  const { loginPopup, setLoginPopup } = useCart();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Clicked")
    if (!isAuthenticated()) {
      setLoginPopup(true);
      return;
    }
    alert('Product Added!');
    setLoginPopup(false);
    router.push('/');
    console.log(form);
  };

  return (
    <>
      {loginPopup && <Login />}
      <Header />
      <div className="pt-[55px]">
        <Breadcrumb />
        <div className='container mx-auto pb-10'>
            <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto">
              {['title', 'description', 'price', 'rating'].map((f) => (
                <input
                  key={f}
                  required
                  placeholder={f}
                  className="p-2 border w-full mb-5 rounded-md capitalize text-sm"
                  onChange={(e) => setForm({ ...form, [f]: e.target.value })}
                />
              ))}
              <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md">Add Product</button>
            </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
