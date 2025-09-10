import React from "react";
import Marquee from "react-fast-marquee";
import { FaFire, FaLeaf, FaGem } from "react-icons/fa";
import { BsGrid3X3Gap } from "react-icons/bs";
import { MdOutlineBolt } from "react-icons/md";
import { TbTriangleFilled } from "react-icons/tb";
import { IoWaterOutline } from "react-icons/io5";

export default function ClientsMarquee() {
  const clients = [
    { name: "waverio", icon: <FaFire /> },
    { name: "SquareStone", icon: <BsGrid3X3Gap /> },
    { name: "martino", icon: <MdOutlineBolt /> },
    { name: "Virogan", icon: <FaGem /> },
    { name: "VERTEX", icon: <TbTriangleFilled /> },
    { name: "aromix", icon: <FaLeaf /> },
    { name: "fireli", icon: <FaFire /> },
    { name: "Natroma", icon: <IoWaterOutline /> },
  ];

  return (
    <section className="py-10 bg-[#16353b]">
      <Marquee gradient={false} speed={50} pauseOnHover={true}>
        {clients.map((client, idx) => (
          <div
            key={idx}
            className="mx-12 flex items-center gap-2 text-white font-semibold text-lg"
          >
            <span className="text-2xl">{client.icon}</span>
            <span>{client.name}</span>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
