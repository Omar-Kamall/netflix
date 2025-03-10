import { Link } from "react-router"
import { Logo } from "../../public/assets"
import { FaBars } from "react-icons/fa";
import { RiCloseLine } from "react-icons/ri";
import { useState } from "react";
import { getAuth , signOut } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { useNavigate } from "react-router-dom";

const Api_Key = "AIzaSyBSpjFZAFbHT7us19g_mPXlNlEXkSKFZ5I";
const firebaseConfig = {
    apiKey: Api_Key,
    authDomain: "netflix-b8a4f.firebaseapp.com",
    projectId: "netflix-b8a4f",
    storageBucket: "netflix-b8a4f.firebasestorage.app",
    messagingSenderId: "119081927679",
    appId: "1:119081927679:web:bbdf1535d3a79b88f51dca",
    measurementId: "G-3HHGS3DV0H"
};

const Navbar = () => {
    const [bar , setBar] = useState(false);
    const links = [
        {id: 0 , name: "Home" , to: "/home"},
        {id: 1 , name: "Trending" , to: "trending"},
        {id: 2 , name: "Popular" , to: "popular"},
        {id: 3 , name: "Action" , to: "action"},
        {id: 4 , name: "Drama" , to: "drama"}
    ]
    const navigate = useNavigate();
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const Sign_Out = () => {
        signOut(auth)
        .then(user => {
            if (user) {
                console.log("User is signed in:", user);
            } else {
                navigate("/");
            }
        })
        .catch(error => {
            console.error("Sign Out Error ..." , error);
        })
    }
    return (
        <nav className="bg-[rgb(30,30,30)] h-14 w-full fixed z-[9999]">
            <div className="mx-[5%]!">
                <div className="container mx-auto! flex justify-between items-center">
                    <div className="">
                        <img className="w-35 cursor-pointer" src={Logo} alt="Image-Error" />
                    </div>
                    <div className="hidden md:flex gap-1">
                        <div className="flex gap-2">
                            {links.map(link => (
                                <Link className="px-3! py-1! text-gray-400 font-bold text-[17px] hover:bg-black transition duration-400 rounded" key={link.id} to={link.to}>{link.name}</Link>
                            ))}
                        </div>
                        <div className="flex items-center">
                            <button onClick={Sign_Out} className="px-3! py-1! bg-red-600 text-white font-bold text-[17px] hover:bg-red-700 transition duration-400 cursor-pointer rounded-2xl">Sign Out</button>
                        </div>
                    </div>
                    <div className="md:hidden">
                        {!bar ? <span onClick={() => setBar(true)}><FaBars className="hover:text-red-600 transition duration-400 cursor-pointer" size={30}/></span> : 
                            <span onClick={() => setBar(false)}><RiCloseLine className="hover:text-red-600 transition duration-400 cursor-pointer" size={30}/></span>
                        }
                    </div>
                </div>
                <div className={`container mx-auto! transform ${bar ? "translate-x-0" : "translate-x-full"} duration-300 ease-in-out`}>
                    <div className="bg-[rgb(30,30,30)] md:hidden w-[220px] h-screen right-0 fixed z-[9999] rounded">
                        <div className="p-5! flex flex-col gap-2">
                            {links.map(link => (
                                <Link onClick={() => setBar(false)} className="px-3! py-2! text-white font-bold text-[17px] hover:bg-black transition duration-400 rounded" key={link.id} to={link.to}>{link.name}</Link>
                            ))}
                        </div>
                        <div className="mt-2!">
                            <div className="flex justify-center items-center">
                                <button onClick={Sign_Out} className="px-3! py-1! bg-red-600 text-white font-bold text-[17px] hover:bg-red-700 transition duration-400 cursor-pointer rounded-2xl">Sign Out</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar