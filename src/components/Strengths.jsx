import React from "react";
import { Search, PenTool, Code, ClipboardCheck } from "lucide-react"; 

export default function Strengths() {
  const strengths = [
    {
      id: "01",
      title: "Research",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      icon: <Search size={40} strokeWidth={1.5} />,
    },
    {
      id: "02",
      title: "Design",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      icon: <PenTool size={40} strokeWidth={1.5} />,
    },
    {
      id: "03",
      title: "Develop",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      icon: <Code size={40} strokeWidth={1.5} />,
    },
    {
      id: "04",
      title: "Test",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      icon: <ClipboardCheck size={40} strokeWidth={1.5} />,
    },
  ];

  return (
    <section className="bg-deep py-20 text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="text-2xl font-semibold text-[coral] mb-12">Our Strength</h3>
        <div className="grid md:grid-cols-4 gap-10">
          {strengths.map((item) => (
            <div key={item.id} className="flex flex-col items-center text-center">
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-[coral] text-white flex items-center justify-center font-bold text-lg absolute -top-6 -left-6 shadow-lg">
                  {item.id}
                </div>
                <div className="w-24 h-24 rounded-full bg-card flex items-center justify-center shadow-md">
                  {item.icon}
                </div>
              </div>
              <h4 className="mt-6 text-lg font-semibold">{item.title}</h4>
              <p className="mt-3 text-sm text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
