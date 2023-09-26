import React, { useState } from "react"
import { Link } from "react-router-dom"
import {FaArrowRight} from "react-icons/fa"
import { navigationLinks } from "./localDatabase"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
 
function Navigation() {
  const [open, setOpen]= useState(false);

  const switches =()=>{
    setOpen((prev) => !prev);
  }
  return (
    <div className="h-14 bg-white  relative">
    <div className="flex items-center justify-between py-4 w-10/12 m-auto">
     <div className="logo flex items-center">
       <img src="" alt="" />
       <Link to="/">
       <span className="font-bold text-2xl uppercase">Nexcent</span>
       </Link>
     </div>
     {/* desktok view */}
     <div className="desktop_navigation flex items-center">
       {navigationLinks.map((x) => (
        <ul className="flex items-center" key={x._id}>
        <Link to={`/${x.link}`}>
         <li className="mx-2 text-lg">{x.link}</li>
        </Link>
      </ul>
      ))} 
     
       <Link to="/register" className="text-white flex items-center  bg-blue-500 rounded ml-8">
         <button className="p-2 ">Register Now</button>
         <FaArrowRight className="mx-2" color="#fff" />
       </Link> 
     </div>
     </div> 
      <div className="md:hidden absolute top-5 right-4" onClick={() => {}}>
      {open? ( 
        <AiOutlineClose size={25} onClick={() => setOpen(false)} /> 
      ) : ( 
        <AiOutlineMenu size={25} onClick={() => setOpen(true)} /> 
      )}
      </div>
      {open && (  <div>
     {/* mobile navigation */}
     <div className="md:hidden bg-blue-300 h-[calc(100vh-3.5rem)] p-4  ">
        {navigationLinks.map((link) => (
         <ul key={link._id} className="flex flex-col">
        <Link to={"/${link.link}"}>
        <li onClick={() => setOpen(false)} className="text-xl text-white p-2 rounded cursor-pointer bg-blue-600 my-2 hover:bg-blue-900"
        >
         {link.link}
         </li>
        </Link>
         </ul>
          ))}
        <Link to="/register" className="text-white flex items-center  bg-blue-600 rounded mt-2 hover:bg-blue-900">
          <button className="p-2 ">Register Now</button>
          <FaArrowRight className="mx-2" color="#fff" />
        </Link>
          </div>
        </div>
       )}
    </div>
  )
}

export default Navigation