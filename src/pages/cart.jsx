import Header from '@/components/Header';
import { useCart } from '../context/CartContext';
import Footer from '@/components/Footer';

export default function Cart() {
  const { cartItems, removeFromCart, incrementQuantity, decrementQuantity } = useCart();

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  return (
    <>
      <Header />
      <div className="p-4">
        <h1 className="text-xl font-bold mb-4">Cart</h1>

        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="mb-4 border p-4 rounded">
              <h2 className="text-lg font-bold">{item.title}</h2>
              <p>Price: ${item.price}</p>

              {/* Quantity Controls */}
              <div className="flex items-center gap-2 my-2">
                <button
                  onClick={() => decrementQuantity(item.id)}
                  className="bg-gray-200 px-2 py-1 rounded"
                >
                  -
                </button>
                <span className="font-medium">{item.quantity}</span>
                <button
                  onClick={() => incrementQuantity(item.id)}
                  className="bg-gray-200 px-2 py-1 rounded"
                >
                  +
                </button>
              </div>

              <p>Subtotal: ${item.price * item.quantity}</p>

              <button
                onClick={() => removeFromCart(item.id)}
                className="mt-2 bg-red-500 text-white px-3 py-1 rounded"
              >
                Remove
              </button>
            </div>
          ))
        )}

        {cartItems.length > 0 && (
          <h2 className="text-xl font-bold mt-6">Total: ${total.toFixed(2)}</h2>
        )}
      </div>
      <Footer />
    </>
  );
}
