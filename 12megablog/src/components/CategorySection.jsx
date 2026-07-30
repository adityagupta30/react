import React from "react";

function CategorySection() {
  const categories = [
    "React",
    "JavaScript",
    "CSS",
    "Node.js",
    "MongoDB",
    "Career",
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-10">
          Explore Categories
        </h2>

        <div className="flex flex-wrap justify-center gap-5">

          {categories.map((category, index) => (
            <button
              key={index}
              className="px-6 py-3 rounded-full bg-blue-100 text-blue-700 hover:bg-blue-600 hover:text-white transition"
            >
              {category}
            </button>
          ))}

        </div>

      </div>
    </section>
  );
}

export default CategorySection;