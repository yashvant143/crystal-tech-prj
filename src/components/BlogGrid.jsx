// src/components/BlogGrid.jsx
import React from "react";

export default function BlogGrid() {
  const posts = [
    {
      id: 1,
      title: "The most Popular Business Of the Year",
      image: "/assets/blog-1.jpg",
      author: "Ranold Jeff",
      date: "May 4th, 2022",
    },
    {
      id: 2,
      title: "How to Build a Scalable Startup",
      image: "/assets/blog-2.jpg",
      author: "Sarah Lee",
      date: "June 10th, 2022",
    },
    {
      id: 3,
      title: "Top Tech Trends in 2025",
      image: "/assets/blog-3.jpg",
      author: "Michael Chen",
      date: "July 19th, 2022",
    },
  ];

  return (
    <section id="blog" className="py-16 max-w-7xl mx-auto px-6">
      <h3 className="text-center text-[color:var(--accent)] text-2xl font-semibold mb-8">
        Blog
      </h3>
      <div className="grid md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <article
            key={post.id}
            className="bg-white rounded-lg overflow-hidden shadow"
          >
            {/* 👇 Image added here */}
            <img
              src={post.image}
              alt={post.title}
              className="h-40 w-full object-cover"
            />
            <div className="p-4">
              <h4 className="font-semibold">{post.title}</h4>
              <div className="mt-3 flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <img
                    src={`https://i.pravatar.cc/40?img=${post.id + 5}`}
                    className="w-8 h-8 rounded-full"
                    alt={post.author}
                  />
                  <span>{post.author}</span>
                </div>
                <div>{post.date}</div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
