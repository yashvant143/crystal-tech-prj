import React from "react";
import client1 from "../assets/blog-1.jpg"; 
import client2 from "../assets/blog-2.jpg";
import client3 from "../assets/blog-3.jpg";

export default function Testimonials() {
  const testimonials = [
    {
      img: client1,
      name: "John Carter",
      role: "CEO, Waverio",
      quote:
        "Working with Aquila Tech was a fantastic experience. They delivered our project on time and exceeded expectations.",
    },
    {
      img: client2,
      name: "Sophia Lee",
      role: "CTO, Vertex",
      quote:
        "Their design and development team is excellent. They understood our requirements clearly and built a modern solution.",
    },
    {
      img: client3,
      name: "Michael Smith",
      role: "Founder, StartUpHub",
      quote:
        "Aquila Tech has been our trusted partner for years. Their support and services are outstanding.",
    },
  ];

  return (
    <section id="testimonials" className="bg-card py-20 bg-[#16353b]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="text-2xl font-semibold text-[coral] mb-3">
          Testimonials
        </h3>
        <h2 className="text-3xl font-bold mb-12">What Our Clients Say</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-16 h-16 rounded-full object-cover border-4 border-coral -mt-12"
              />
              <p className="mt-6 text-gray-600 italic">"{item.quote}"</p>
              <h4 className="mt-4 font-semibold text-lg">{item.name}</h4>
              <span className="text-sm text-gray-500">{item.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
