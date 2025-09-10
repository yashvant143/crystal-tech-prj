import React from "react";
import { motion } from "framer-motion";

export default function BlogGrid() {
  const blogs = [
    {
      id: 1,
      image: "/src/assets/blog-6.png",
      title: "Bonjour Tote Bag",
      desc: "A stylish and eco-friendly bag for your daily needs.",
    },
    {
      id: 2,
      image: "/src/assets/blog-4.png",
      title: "Creative Workspace",
      desc: "A modern setup designed to boost creativity and focus.",
    },
    {
      id: 3,
      image: "/src/assets/blog-5.png",
      title: "Be Creative with Design",
      desc: "Explore the limitless boundaries of design and art.",
    },
  ];

  return (
    <section className="py-16 bg-deep text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Our Creative Works
        </h2>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              className={`bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 group 
                ${index === 1 ? "scale-110 z-10" : "scale-95"}`}
              whileHover={{ scale: 1.08, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.img
                src={blog.image}
                alt={blog.title}
                className="w-full h-64 object-cover rounded-t-xl transform group-hover:scale-110 transition duration-500"
                whileHover={{ rotate: -2 }}
              />
              <div className="p-5 text-black">
                <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                <p className="text-sm text-gray-600">{blog.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
