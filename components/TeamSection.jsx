'use client'

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const teamMembers = [
  {
    name: "BINOYBABU",
    role: "CEO AND FOUNDER",
    image: "/assets/team/binoy.jpg", 
    glowColor: "from-blue-500 to-cyan-500"
  },
  {
    name: "SREEKANTH",
    role: "CTO AND SMC TRADER",
    image: "/assets/team/sree.jpg", 
    glowColor: "from-purple-500 to-pink-500"
  },
  {
    name: "SANDYAGU R",
    role: "BLOCKCHAIN EXPERT",
    image: "/assets/team/sandy.jpg", 
    glowColor: "from-green-500 to-yellow-500"
  },
  {
    name: "ANUGRAH",
    role: "PUBLICITY DESIGNER",
    image: "/assets/team/anu.jpg",
    glowColor: "from-red-500 to-orange-500"
  }
];

export default function TeamSection() {
  return (
    <section className="w-full min-h-screen bg-zinc-900 py-8 flex items-center justify-center overflow-hidden">
      <div className="container px-4">
        <h2 className="text-center text-4xl font-bold tracking-wider text-white mb-12">
          MEET THE TEAM
        </h2>
        {/* Flexbox for team cards, with responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pb-8 justify-start md:justify-center">
          {teamMembers.map((member, index) => (
            <TeamCard key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamCard({ member }) {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      className="relative w-full h-80 sm:h-96 md:h-72 lg:h-80 flex-wrap-reverse rounded-2xl overflow-hidden cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      animate={{
        scale: isHovered ? 1.05 : 1,
      }}
      transition={{
        duration: 0.3,
        ease: "easeOut"
      }}
    >
      {/* Card Background with Glow */}
      <div 
        className={`relative h-full bg-zinc-800 rounded-2xl overflow-hidden transition-shadow duration-300 ${
          isHovered ? `shadow-[0_0_30px] shadow-${member.glowColor}` : ''
        }`}
      >
        {/* Image Section */}
        <div className="h-3/4 relative">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-800/90" />
        </div>

        {/* Name and Role */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-lg font-bold text-white mb-1">
            {member.name}
          </h3>
          <p className="text-sm font-medium text-blue-400">
            {member.role}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
