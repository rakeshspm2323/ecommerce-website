import Header from "@/components/Header";
import { useCart } from "../context/CartContext";
import Footer from "@/components/Footer";
import { faStar, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function Cart() {
  const { cartItems, removeFromCart, incrementQuantity, decrementQuantity } =
    useCart();

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  console.log("cartItems", cartItems);
  return (
    <>
      <Header />
      <div className="pt-[55px]">
      <div className="container mx-auto py-10">
        {cartItems?.length === 0 ? (
          <p className="text-lg font-semibold text-center my-5">Your cart is empty.</p>
        ) : (
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_320px] gap-10 md:px-0 px-5 relative">
          {/* Product List */}
          <div className="space-y-6 bg-white shadow-md rounded-md px-4 sm:px-7 py-7">
              {cartItems?.length > 0 &&
              cartItems?.map((item) => (
                <div
                  key={item?.id}
                  className="relative flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border border-teal-500 rounded-md p-4 sm:p-5 w-full"
                >
                  <div className="absolute top-1 right-1">
                    <FontAwesomeIcon
                      icon={faXmark}
                      className="h-4 w-4 hover:bg-gray-100  text-black rounded-full cursor-pointer p-1"
                      onClick={() => removeFromCart(item?.id)}
                    />
                  </div>
                  <div className="flex flex-col md:flex-row items-start w-full">
                    <div className="flex flex-col justify-center items-center w-full">
                      <Image
                        src={item?.thumbnail}
                        alt="Product"
                        className="w-32 h-32 object-cover"
                        width={200}
                        height={200}
                      />
                      <div className="flex items-center gap-3 mt-4 bg-green-500 text-white px-2 py-1.5 rounded-md lg:w-auto w-full justify-between">
                        <button
                          className="cursor-pointer h-full w-7"
                          onClick={() => decrementQuantity(item?.id)}
                        >
                          -
                        </button>
                        <span className="font-medium">{item?.quantity}</span>
                        <button
                          className="cursor-pointer w-7 h-full"
                          onClick={() => incrementQuantity(item?.id)}
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Right Section - Details */}
                    <div className="space-y-3 w-full">
                      <h2 className="font-semibold text-base sm:text-lg">
                        {item?.title}
                      </h2>
                      <p className="text-sm text-gray-500">
                        Brand : {item?.brand}
                      </p>
                      <p className="text-sm text-gray-500 capitalize">
                        Product Type : {item?.category}
                      </p>
                      <div className="flex flex-wrap gap-2 items-center">
                        <div className="flex items-center gap-1 bg-green-500 text-white px-2 py-1 rounded text-sm font-semibold">
                          {item?.rating}
                          <FontAwesomeIcon icon={faStar} className="text-xs" />
                        </div>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-lg font-semibold text-black">
                          Price: ${item?.price}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
          {/* Price Details */}
          <div className="bg-white shadow-md rounded-md md:px-7 px-5 py-7 md:sticky top-24 self-start">
            <h3 className="text-lg font-semibold mb-4 border-b">
              PRICE DETAILS
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Price ({cartItems?.length} items)</span>
                <span>${total?.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Charges</span>
                <span className="text-green-600">Free</span>
              </div>
            </div>
            {cartItems.length > 0 && (
            <div className="flex justify-between font-bold text-lg mt-4 border-t border-b border-dashed py-2 mb-2">
              <span>Total Amount</span>
              <span>${total?.toFixed(2)}</span>
            </div>
            )}
          </div>
          {/* Place Order Button */}
          <div className="">
            <button className="w-full bg-teal-500 hover:bg-teal-400 text-white font-bold py-3 rounded shadow">
              PLACE ORDER
            </button>
          </div>
        </div>
        )}
      </div>
      </div>
      <Footer />
    </>
  );
}

// import Header from '@/components/Header';
// import { useCart } from '../context/CartContext';
// import Footer from '@/components/Footer';

// export default function Cart() {
//   const { cartItems, removeFromCart, incrementQuantity, decrementQuantity } = useCart();

//   const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
//   console.log("cartItems",cartItems);
//   return (
//     <>
//       <Header />
//       <div className="p-4">
//         <h1 className="text-xl font-bold mb-4">Cart</h1>

//         {cartItems.length === 0 ? (
//           <p>Your cart is empty.</p>
//         ) : (
//           cartItems.map((item) => (
//             <div key={item.id} className="mb-4 border p-4 rounded">
//               <h2 className="text-lg font-bold">{item.title}</h2>
//               <p>Price: ${item.price}</p>

//               {/* Quantity Controls */}
//               <div className="flex items-center gap-2 my-2">
//                 <button
//                   onClick={() => decrementQuantity(item.id)}
//                   className="bg-gray-200 px-2 py-1 rounded"
//                 >
//                   -
//                 </button>
//                 <span className="font-medium">{item.quantity}</span>
//                 <button
//                   onClick={() => incrementQuantity(item.id)}
//                   className="bg-gray-200 px-2 py-1 rounded"
//                 >
//                   +
//                 </button>
//               </div>

//               <p>Subtotal: ${item.price * item.quantity}</p>

//               <button
//                 onClick={() => removeFromCart(item.id)}
//                 className="mt-2 bg-red-500 text-white px-3 py-1 rounded"
//               >
//                 Remove
//               </button>
//             </div>
//           ))
//         )}

//         {cartItems.length > 0 && (
//           <h2 className="text-xl font-bold mt-6">Total: ${total.toFixed(2)}</h2>
//         )}
//       </div>
//       <Footer />
//     </>
//   );
// }
