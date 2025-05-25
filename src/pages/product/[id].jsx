import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useCart } from "../../context/CartContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProductDetail() {
  const { query } = useRouter();
  const [product, setProduct] = useState(null);
  const { 
    cartItems, 
    addToCart, 
    incrementQuantity, 
    decrementQuantity 
  } = useCart();

  useEffect(() => {
    if (query.id) {
      fetch(`https://dummyjson.com/products/${query.id}`)
        .then((res) => res.json())
        .then((data) => setProduct(data));
    }
  }, [query.id]);

  const cartItem = cartItems?.find((item) => item.id === product?.id);

  function getMonthDifference(reviewDate) {
    const now = new Date();
    const past = new Date(reviewDate);

    const yearDiff = now.getFullYear() - past.getFullYear();
    const monthDiff = now.getMonth() - past.getMonth();

    const totalMonths = yearDiff * 12 + monthDiff;

    if (totalMonths <= 0) return "just now";
    if (totalMonths === 1) return "1 month";
    return `${totalMonths} months`;
  }

  if (!product) {
    return (
      <>
        <Header />
        <div className="container mx-auto py-10 animate-pulse px-5">
          <div className="grid grid-cols-1 md:grid-cols-[320px_2fr] gap-5 md:px-0 px-5">
            <div className="w-full max-w-md mx-auto">
              <div className="md:w-72 w-full h-64 bg-gray-200 rounded mb-5 mx-auto"></div>
              <div className="flex md:flex-row flex-col md:justify-around md:items-center mb-5">
                <div className="h-10 w-24 bg-gray-200 rounded md:mb-0 mb-5"></div>
                <div className="h-10 md:w-32 w-full bg-gray-200 rounded "></div>
              </div>
            </div>
            <div className="w-full max-w-md mx-auto">
              <div className="h-10 bg-gray-200 rounded w-full mx-auto"></div>
              <div className="h-8 bg-gray-200 rounded w-1/4 my-4"></div>
              <div className="h-8 bg-gray-200 rounded w-1/4"></div>
              <div className="h-4 bg-gray-200 rounded w-full my-4"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-full my-4"></div>
              <div className="h-8 bg-gray-200 rounded w-2/5 mb-4"></div>
              <div className="flex justify-between items-center">
                <div className="h-4 w-24 bg-gray-200 rounded"></div>
                <div className="h-4 w-32 bg-gray-200 rounded"></div>
              </div>
              <div className="flex justify-between items-center my-5">
                <div className="h-4 w-24 bg-gray-200 rounded"></div>
                <div className="h-4 w-32 bg-gray-200 rounded"></div>
              </div>
              <div className="flex justify-between items-center">
                <div className="h-4 w-24 bg-gray-200 rounded"></div>
                <div className="h-4 w-32 bg-gray-200 rounded"></div>
              </div>
              <div className="flex justify-between items-center my-5">
                <div className="h-4 w-24 bg-gray-200 rounded"></div>
                <div className="h-4 w-32 bg-gray-200 rounded"></div>
              </div>
              <div className="flex justify-between items-center my-5">
                <div className="h-4 w-24 bg-gray-200 rounded"></div>
                <div className="h-4 w-32 bg-gray-200 rounded"></div>
              </div>
              <div className="flex justify-between items-center">
                <div className="h-4 w-24 bg-gray-200 rounded"></div>
                <div className="h-4 w-32 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="container mx-auto py-10">
        <div className="grid grid-cols-1 md:grid-cols-[320px_2fr] gap-10 md:px-0 px-5">
          <div className="h-full w-full ">
            <div className="flex justify-center items-center border border-teal-500 mb-5 rounded-md ">
              <Image
                src={product?.thumbnail}
                className="h-full w-full object-cover"
                width={200}
                height={200}
                alt={product?.title}
              />
            </div>
            <div className="md:flex justify-between items-center gap-5">
              <p className="text-xl font-semibold md:mb-0 mb-5">
                ${product?.price}
              </p>
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
          </div>

          <div className="h-full w-full md:px-5 px-0">
            <div className="w-full">
              <h1 className="text-lg font-semibold mb-4">{product?.title}</h1>
              <div className="space-y-3">
                <div className="flex gap-2 items-center ">
                  <div className="cursor-pointer flex justify-center items-center gap-1 bg-green-500 text-white px-2 py-1 rounded text-sm font-semibold">
                    {product?.rating} 
                    <FontAwesomeIcon icon={faStar} className="text-xs mb-0.5" />
                  </div>
                  <p className="text-gray-500 cursor-pointer">Ratings & Reviews</p>
                </div>
                <p className="text-xl font-semibold">${product?.price}</p>
                <p classNmae="font-medium">{product?.description}</p>
              </div>
            </div>
            <div className="w-full mt-5">
              <h2 className="text-lg font-semibold mb-4">Highlights</h2>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Brand</span>
                  <span className="text-gray-900 font-medium">
                    {product?.brand}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Product category</span>
                  <span className="text-gray-900 font-medium capitalize">
                    {product?.category}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Stock</span>
                  <span className="text-gray-900 font-medium">
                    {product?.stock}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Weight</span>
                  <span className="text-gray-900 font-medium">
                    {product?.weight} g
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full mt-5 border-t pt-5">
              <h2 className="text-lg font-semibold mb-4">Information</h2>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Availability Status</span>
                  <span className="text-gray-900 font-medium">
                    {product?.availabilityStatus}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Shipping</span>
                  <span className="text-gray-900 font-medium">
                    {product?.shippingInformation}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Warranty</span>
                  <span className="text-gray-900 font-medium">
                    {product?.warrantyInformation}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Return Policy</span>
                  <span className="text-gray-900 font-medium">
                    {product?.returnPolicy}
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full mt-5 border-t pt-5">
              <h2 className="text-lg font-semibold mb-4">Ratings & Reviews</h2>
              <div className="space-y-6">
                {product?.reviews?.map(review => {
                  return (
                    <div className="border-b pb-5">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="bg-green-600 text-white text-sm px-2 py-1 rounded font-semibold">
                          {review?.rating} 
                          <FontAwesomeIcon icon={faStar} className="text-xs ml-1" />
                        </div>
                        <p className="font-semibold text-gray-900">{review?.comment}</p>
                      </div>
                      <div className="text-sm text-gray-500 flex flex-wrap items-center md:gap-5 gap-2">
                        <span className="font-medium text-gray-800">
                          {review?.reviewerName}
                        </span>
                        <span>{review?.reviewerEmail}</span>
                        <span>{getMonthDifference(review?.date)} ago</span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
