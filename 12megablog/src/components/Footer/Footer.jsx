import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold text-blue-500">
              BLOGIFY
            </h2>

            <p className="mt-4 text-gray-400 leading-7">
            Create, publish and discover amazing blogs written by developers around the world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">

              <li>
                <Link to="/" className="text-gray-300 hover:text-blue-500 transition duration-300">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/all-posts" className="hover:text-blue-400 transition">
                  Blogs
                </Link>
              </li>

              <li>
                <Link to="/login" className="hover:text-blue-400 transition">
                  Login
                </Link>
              </li>

              <li>
                <Link to="/signup" className="hover:text-blue-400 transition">
                  Signup
                </Link>
              </li>

            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Connect
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>GitHub</li>
              <li>LinkedIn</li>
              <li>Email</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-700 mt-10 pt-6">
          <p className="text-center text-gray-500">
            © 2026 BLOGIFY. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;