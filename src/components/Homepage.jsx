import React from "react";
import hompepage_image from "../assets/hompepage.svg"
function Homepage() {
  return (
    <div className="bg-[rgb(245,247,250)]  py-16  md:py-16 lg:py-32 xl:py-64 mt-4 lg:h-[calc(100vh-3.5rem)]">
      <div className="w-10/12 m-auto md:flex justify-between">
        <div className="text">
          <h1 className="md:text-4xl lg:text-6xl font-bold">
            Lessons and insights <br />
            <span className="text-blue-500">from 8 years</span> <br />
          </h1>
          <p className="my-8">
            Where to grow your business as a photographer: site or social media?
          </p>
          <button className="bg-blue-500 text-white rounded p-2">
            Register
          </button>
        </div>
        <div className="image mt-8">
        <img src={hompepage_image} alt="homepage_image" />
        </div>
      </div>
    </div>
  );
}

export default Homepage;