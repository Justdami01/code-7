import React from "react"
import { Link } from "react-router-dom"
import nf from "../assets/nf.png"
import { company_brands } from "./localDatabase"
import { FaArrowRight } from "react-icons/fa"
function Brand() {
  return (
    <div>
    <div className="w-10/12 m-auto grid sm:grid-cols-1 md:grid-cols-2 py-8">
    <div className="mb-8 mr-4">
    <img className="w-full" src={nf} alt="about" />
    </div>
        <div className="text"> 
          <p className="py-4 text-lg">
          Nathan John Feuerstein (born March 30, 1991), known by his initials NF (stylized as ИF), is an American rapper, singer, songwriter, and record producer.[1] He has released two EPs, I'm Free (2012),[2] and a self-titled EP in 2014 with Capitol CMG. 
          His first major-label album, Mansion, was released on March 31, 2015. His second studio album, Therapy Session, was released on April 22, 2016, and peaked at number 12 on the US Billboard 200. His albums have earned several accolades, some of which include: 
          the Gospel Music Association Dove Award for Rap/Hip Hop Album of the Year (Therapy Session).
          NF achieved mainstream popularity in 2017 with Perception; the album charted at number one in the United States and was certified platinum, while its third single, "Let You Down", reached number twelve on the U.S. Billboard Hot 100, and was a top-ten hit internationally. 
          He achieved similar commercial success with his follow up The Search (2019). 
          Feuerstein's most recent album, Hope, released on April 7, 2023, had commercial success and peaked at number 2 on the US Billboard 200.
          </p>
         <h1 className="text-4xl text-blue-500 font-bold py-4">NF</h1>
         <h1 className=" text-xl pb-4 font-bold">Head Of Rappers</h1>
         <div className="md:flex  items-center  ">
         <div className="grid md:grid-cols-8 gap-2">
         {company_brands.map((brand) => (
           <div
             className="md:flex md:items-center flex-center"
             key={brand._id}
           >
             <img
               src={brand.image}
               alt="brand-image"
               className="w-full  py-4 md:w-[40px] lg:w-[70px] rounded-md max-sm:bg-gray-100  md:bg-0"
             />
           </div>
         ))}
       </div>
       <div className="flex items-center py-4">
         <Link className="text-blue-500 rl-4 md:text-[10px] text-xl">
           See All Customers
         </Link>
         <FaArrowRight size={20} className="text-blue-500 ml-4" />
       </div>
     </div>
   </div>
        {/* here */}
      </div>
    </div>
  )
}

export default Brand