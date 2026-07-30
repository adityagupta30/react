import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function Postcard({ $id, title, featuredimage }) {
  console.log("POST:", { $id, title, featuredimage });
    console.log("TYPE:", typeof featuredimage);

  return (
    <Link to={`/post/${$id}`}>
      <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">

        {/* Image */}
        <div className="overflow-hidden">
          <img
            src={appwriteService.getFilePreview(featuredimage)}
            alt={title}
            className="w-full h-56 object-cover hover:scale-110 transition-transform duration-500"
          />
        </div>

        {/* Content */}
        <div className="p-5">

          <span className="text-sm text-blue-600 font-medium">
            Technology
          </span>

          <h2 className="text-xl font-bold text-gray-900 mt-2 line-clamp-2">
            {title}
          </h2>

          <p className="text-gray-500 mt-3 text-sm">
            Read this article to explore more about this topic.
          </p>

          <button className="mt-5 text-blue-600 font-semibold hover:text-blue-800">
            Read More →
          </button>

        </div>

      </div>
    </Link>
  );
}

export default Postcard;