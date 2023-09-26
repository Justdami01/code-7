import React from "react"
import {BsDribbble, BsTwitter, BsInstagram, BsYoutube } from "react-icons/bs"
import {BsSendFill} from "react-icons/bs"
import { Link } from "react-router-dom";

function Footer() {
  const day = new Date();
  const year = day.getFullYear();
  const handlesubmit=(e)=>{
    e.preventDefault();
  };
  return (
    <div className="bg-black text-white py-8">
     <div className="grid sm:grid-cols-1 md:grid-cols-4 w-11/12 m-auto gap-8">
       <div className="">
       <div className="flex items-center">
       <img src="" alt="logo" />
         <h1 className="text-xl font-bold uppercase">Nexcent</h1> 
       </div>
         

         <div className="">
          <p className="text-lg py-8"> 
           Copy right &copy; Dami website {year} Nexcent <br /> all right reserved {" "}
         </p>
         <div className="flex items-center">
           <BsDribbble  className="mx-2 cursor-pointer" size={25} cur/>
           <BsTwitter  className="mx-2 cursor-pointer" size={25} cur/>
           <a href="https://www.instagram.com/just_dami_02/" target="blank"> 
           <BsInstagram  className="mx-2 cursor-pointer" size={25} cur/>
           </a>
           <a href=" https://www.youtube.com" target="blank">
             <BsYoutube  className="mx-2 cursor-pointer" size={25} cur/>
           </a>
         </div>
         </div>
       </div>
       <div className="company">
         <h1 className="text-xl font-bold uppercase">Company</h1>
         <div className="">
           <ul className="py-8">
           <Link to="/about-us">
            <li className="py-2 text-xl cursor-pointer">About us</li>
           </Link>
           <Link to="/blog">
            <li className="py-2 text-xl cursor-pointer">Blog</li>
           </Link>
           <Link to="/contact">
            <li className="py-2 text-xl cursor-pointer">Contact Us</li>
           </Link>
           <Link to="/pricing">
            <li className="py-2 text-xl cursor-pointer">Pricing</li>
           </Link>
           <Link to="/testimonials">
            <li className="py-2 text-xl cursor-pointer">Testimonials</li>
           </Link>
           </ul>
         </div>
       </div>
       <div className="support">
         <h1 className="text-xl font-bold uppercase">Support</h1>
         <div className="">
           <ul className="py-8">
           <Link to="/help-center">
            <li className="py-2 text-xl cursor-pointer">Help Center</li>
           </Link>
           <Link to="/terms-and-services">
            <li className="py-2 text-xl cursor-pointer">Terms and Services</li>
           </Link>
           <Link to="/legal">
            <li className="py-2 text-xl cursor-pointer">Legal</li>
           </Link>
           <Link to="/privacy-Policy">
            <li className="py-2 text-xl cursor-pointer">Privacy Policy</li>
           </Link>
           <Link to="/satus">
            <li className="py-2 text-xl cursor-pointer">Satus</li>
           </Link>
           </ul>
         </div>
       </div>
       <div className="stay tune">
         <h1 className="text-xl font-bold uppercase">Stay Tune</h1>
         <div className="py-8">
           <form onSubmit={handlesubmit} className="flex items-center justify-between bg-gray-300 p-2 md:p-1 rounded">
             <input type="email" 
             placeholder="Your email address" 
             className="outline=none bg-gray-300 w-full" />
             <button type="submit">
               <BsSendFill size={25} />
             </button>
           </form>
         </div>
       </div>
     </div>
    </div>
  )
}

export default Footer