import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/hero.svg";
function HeroSection() {
  return (
    <section className="min-h-screen flex items-center bg-linear-to-r from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col-reverse md:flex-row items-center justify-between">

        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl font-bold text-gray-900 leading-tight">
            Share Your Ideas <br />
            <span className="text-blue-600">With The World.</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            Create, publish and discover amazing blogs written by developers
            around the world.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link to="/all-posts">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                Start Reading
              </button>
            </Link>

            <Link to="/signup">
              <button className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition">
                Join Now
              </button>
            </Link>
          </div>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center">
  <img
    src={heroImage}
    alt="Blog Illustration"
    className="w-full max-w-lg"
  />
</div>
      </div>
    </section>
  );
}

export default HeroSection;