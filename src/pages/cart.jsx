import Header from '@/components/Header';
import { useCart } from '../context/CartContext';
import Footer from '@/components/Footer';

export default function Cart() {
  const { cart, removeFromCart } = useCart();
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <>
        <Header />
        <div className="p-4">
            <h1 className="text-xl font-bold mb-4">Cart</h1>
            {cart.map((item) => (
                <div key={item.id} className="mb-4 border p-4">
                <h2 className="text-lg font-bold">{item.title}</h2>
                <p>${item.price}</p>
                <button onClick={() => removeFromCart(item.id)} className="mt-2 bg-red-500 text-white px-2 py-1">Remove</button>
                </div>
            ))}
            <h2 className="text-xl font-bold">Total: ${total}</h2>
        </div>
        <Footer />
    </>
  );
}