 import React from "react";

function FeaturedSection() {
  const featuredBlogs = [
    {
      title: "Master React in 30 Days",
      category: "React",
      image: "https://picsum.photos/400/250?1",
    },
    {
      title: "JavaScript Interview Guide",
      category: "JavaScript",
      image: "https://picsum.photos/400/250?2",
    },
    {
      title: "Tailwind CSS Tips",
      category: "CSS",
      image: "https://picsum.photos/400/250?3",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Featured Blogs
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {featuredBlogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">

                <span className="text-blue-600 text-sm font-semibold">
                  {blog.category}
                </span>

                <h3 className="text-xl font-bold mt-3">
                  {blog.title}
                </h3>

                <button className="mt-5 text-blue-600 font-semibold hover:text-blue-800">
                  Read More →
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default FeaturedSection;