'use client';

import { useState, useEffect, useRef } from "react";
import CountUp from 'react-countup';
import { motion } from 'framer-motion';

const numbers = [
    { id: 1, number: 5, title: "courses" },
    { id: 2, number: 100, title: "learning hours" },
    { id: 3, number: 500, title: "happy clients" },
    { id: 4, number: 5, title: "years of teaching" }
];

export default function NumberSection() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section className="mx-auto relative z-[10] text-white flex justify-center p-6 bg-[#000]">
            <header
                className="absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-[#000428]
                via-[#3a6073] to-primary opacity-20 blur-[100px] left-10 top-0 hidden md:block"
            />

            <motion.section
                ref={sectionRef}
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}  
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="relative z-1 mx-auto w-11/12 lg:mx-0 p-5 sm:p-6 py-6 sm:py-8 rounded-3xl 
                border-[#3a6073] bg-[#2b2b43] shadow-lg md:divide-x divide-primary grid grid-cols-2 
                md:grid-cols-4 gap-4 md:gap-6 lg:gap-12"
            >
                {numbers.map((item) => (
                    <article key={item.id} className="text-center">
                        <header>
                            <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-[#F5F5F5]">
                                {isVisible && (
                                    <CountUp
                                        start={0}
                                        end={item.number}
                                        duration={2}
                                        separator=","
                                    />
                                )} +
                            </h2>
                        </header>
                        <p className="mt-2 text-[#A9A9A9]">{item.title}</p>
                    </article>
                ))}
            </motion.section>
        </section>
    );
}
