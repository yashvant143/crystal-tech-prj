import React from "react";

export default function Hero(){
  return (
    <section id="home" className="hero-pattern min-h-[72vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-28 text-center">
        <div className="inline-block bg-white/100 text-xs px-5 py-2 rounded-full mb-6 text-[color:var(--accent)] font-semibold">INNOVATING EXPERIENCES. INSPIRING ENGAGEMENT</div>

        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
          Future-Focused and Impact-Driven <br/> Web Development
        </h1>

        <h2 className="text-2xl md:text-3xl mt-4 text-[color:var(--accent)] font-semibold">Powered by Aquila Tech Solution</h2>

        <p className="max-w-2xl mx-auto mt-6 text-gray-300">
          We craft intuitive digital experiences — unique, user-centric, and performance-driven, combining sleek interfaces with seamless functionality.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a className="btn-primary" href="#contact">Get in touch →</a>
          <a className="px-6 py-2 rounded-full bg-transparent border border-white/20 text-white" href="#portfolio">Check Our Portfolio</a>
        </div>
      </div>
    </section>
  );
}
