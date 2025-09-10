import React from "react";

const serviceList = [
  {title:"Design", bullets:["Integrated Custom Web Design","Custom Logo","Scalable E-commerce","Seamless UI/UX"]},
  {title:"Development", bullets:["Frontend & Backend","APIs & Integrations","CMS","Performance"]},
  {title:"Website SEO", bullets:["On-page SEO","Technical SEO","Speed Optimization","Analytics"]}
];

export default function Services(){
  return (
    <section id="services" className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-1">
          <h3 className="text-[color:var(--accent)] text-xl font-semibold mb-4">Services</h3>
          <p className="text-gray-300">It is a long established fact that a reader will be distracted by the readable content...</p>
          <div id="ser1" className="mt-6 card bg-tealish text-white">
            <h4 className="font-semibold">Fuel Your Digital-First Idea</h4>
            <p className="mt-2 text-sm">With 1600+ pages when looking at its layout. The point of using...</p>
            <a className="mt-4 inline-block btn-primary" href="#contact">Get in touch →</a>
          </div>
        </div>

        <div className="md:col-span-2 grid gap-4">
          {serviceList.map((s,idx)=>(
            <div key={idx} className="bg-white rounded-xl p-6 shadow">
              <h4 className="font-semibold text-lg text-[black]">{s.title}</h4>
              <ul className="mt-3 text-sm text-gray-600">
                {s.bullets.map((b,i)=>(<li key={i} className="py-1">• {b}</li>))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
