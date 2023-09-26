import React from "react"
import { Link } from "react-router-dom"
import about from "../assets/about.svg"
function AboutUs() {
  return (
    <div>
    <div className="w-10/12 m-auto grid sm:grid-cols-1 md:grid-cols-2 py-8">
    <div className="mb-8">
    <img className="w-full" src={about} alt="about" />
    </div>
        <div className="text">
          <h1 className="text-3xl font-bold"> How to design your site footer like we did</h1>   
          <p className="py-4 text-lg">
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
            augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
            elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
            habitasse platea dictumst.
          </p>
          <p className="text-lg pb-4 md:hidden lg:block">
            Vivamus vehicula leo dui, at porta nisi facilisis finibus. In
            euismod augue vitae nisi ultricies, non aliquet urna tincidunt.
            Integer in nisi eget nulla commodo faucibus efficitur quis massa.
            Praesent felis est, finibus et nisi ac, hendrerit venenatis libero.
            Donec consectetur faucibus ipsum id gravida.
          </p>
          <p className="text-lg pb-4 md:hidden lg:block">
            Vivamus vehicula leo dui, at porta nisi facilisis finibus. In
            euismod augue vitae nisi ultricies, non aliquet urna tincidunt.
            Integer in nisi eget nulla commodo faucibus efficitur quis massa.
            Praesent felis est, finibus et nisi ac, hendrerit venenatis libero.
            Donec consectetur faucibus ipsum id gravida.
          </p>
          <Link to="/about">
          <button className="text-white bg-blue-500 rounded-md p-2 hover:bg-blue-600 active:bg-green-400">Learn More</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AboutUs