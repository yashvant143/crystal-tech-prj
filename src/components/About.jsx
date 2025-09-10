import React from "react";
import sample from "../assets/office.jpg";

export default function About() {
  return (
    <section id="about" className="w-full bg-[#16353b] py-10 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* Image Section */}
        <div className="relative flex justify-center md:justify-start">
          <div
            id="arc"
            className="w-full h-80 md:h-[500px] overflow-hidden rounded-xl"
          >
            <img
              src={sample}
              alt="office"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content Section */}
        <div>
          <h3 className="text-coral text-xl font-semibold mb-4">About Us</h3>
          <p className="text-gray-300 leading-relaxed">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed It is a long established fact
            that a reader will be distracted by the readable content of a page
            when looking at its layout. The point of using Lorem Ipsum is that
            it has a more-or-less normal distribution of letters, as opposed
          </p>

          <div className="mt-6 glass max-w-sm text-black p-4 rounded-md bg-white">
            <div id="about1" className="font-medium flex items-center gap-3">
              <span className="text-coral text-3xl">👨‍💼</span>
              <div>
                <div className="font-bold">Get Instant Professional Advice</div>
                <div className="text-sm text-coral mt-1">
                  Ready to Help · +1 356 678 7897
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
