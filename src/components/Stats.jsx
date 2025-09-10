import React, { useEffect, useState } from "react";

function Counter({ target, suffix = "+", duration = 2000 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const frames = Math.round(duration / 16); // ~60fps
    const increment = target / frames;

    let frame = 0;
    const timer = setInterval(() => {
      frame++;
      start += increment;
      if (frame >= frames) {
        clearInterval(timer);
        setCount(target);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const stats = [
    { number: 14, label: "Years Experience" },
    { number: 700, label: "Completed Projects" },
    { number: 500, label: "Happy Clients" },
    { number: 20, label: "Team Strength" },
  ];

  return (
    <section className="bg-[#16353b] py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-0  border border-white/20">
          {stats.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center py-12 border border-white/20 transition-transform duration-300 hover:scale-105"
            >
              <h3 className="text-5xl font-extrabold text-[#e36c58] drop-shadow-md">
                <Counter target={item.number} />
              </h3>
              <p className="text-white mt-2 text-lg">{item.label}</p>
            </div>
          ))}
        </div>

        {/* center dot */}
        <span className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full z-20"></span>
      </div>
    </section>
  );
}
