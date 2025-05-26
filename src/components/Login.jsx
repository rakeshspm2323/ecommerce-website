// import React, { useEffect, useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faXmark } from "@fortawesome/free-solid-svg-icons";
// import { useCart } from "@/context/CartContext";
// import Image from "next/image";

// const Login = () => {
//   const { setLoginPopup } = useCart();

//   useEffect(() => {
//     document.body.style.overflow = "hidden";
//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, []);

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     const res = await fetch("https://reqres.in/api/login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email, password }),
//     });
//     const data = await res.json();
//     console.log("data",data)
//     if (data.token) {
//       localStorage.setItem("token", data.token);
//       router.push("/");
//     } else {
//       alert("Login failed");
//     }
//   };

//   return (
//     <>
//       <div className="fixed inset-0 z-[99] flex items-center justify-center">
//         <div className="absolute inset-0 bg-black opacity-50"></div>
//         <div className="bg-white text-black rounded-xl shadow-lg z-50 w-[350px] max-h-[90vh] overflow-y-auto px-7 pt-5 pb-10">
//           <div className="pr-1 pt-1 flex justify-end items-center">
//             <FontAwesomeIcon
//               icon={faXmark}
//               className="h-4 w-4 hover:bg-gray-200 bg-gray-100 text-blue-950 rounded-full cursor-pointer p-1"
//               onClick={() => setLoginPopup(false)}
//             />
//           </div>
//           <form onSubmit={handleLogin} className="space-y-5">
//             <h3 className="text-2xl text-center font-semibold">Login Form</h3>
//             <div className="flex justify-center items-center">
//               <Image
//                 src="/assets/logoCampus.png"
//                 className="object-cover"
//                 alt="logo"
//                 width={100}
//                 height={100}
//               />
//             </div>
//             <input
//               type="email"
//               placeholder="Email"
//               onChange={(e) => setEmail(e.target.value)}
//               className="p-2 border w-full rounded-md"
//               required
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               onChange={(e) => setPassword(e.target.value)}
//               className="p-2 border w-full rounded-md"
//               required
//             />
//             <button
//               type="submit"
//               className="bg-teal-500 text-white px-4 py-2 rounded-md w-full hover:bg-teal-400 cursor-pointer"
//             >
//               Login
//             </button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Login;


import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import { login } from "@/utils/auth";
import { useRouter } from "next/router";

const Login = () => {
  const { setLoginPopup } = useCart();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    const result = await login(email, password);
    if (result.success) {
      setLoginPopup(false);
      // router.push("/");
    } else {
      alert(result.error);
    }
  };


  return (
    <div className="fixed inset-0 z-[99] flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="bg-white text-black rounded-xl shadow-lg z-50 w-[350px] max-h-[90vh] overflow-y-auto px-7 pt-5 pb-10">
        <div className="pr-1 pt-1 flex justify-end items-center">
          <FontAwesomeIcon
            icon={faXmark}
            className="h-4 w-4 hover:bg-gray-200 bg-gray-100 text-blue-950 rounded-full cursor-pointer p-1"
            onClick={() => setLoginPopup(false)}
          />
        </div>
        <form onSubmit={handleLogin} className="space-y-5">
          <h3 className="text-2xl text-center font-semibold">Login Form</h3>
          <div className="flex justify-center items-center">
            <Image
              src="/assets/logoCampus.png"
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
  );
};

export default Login;
