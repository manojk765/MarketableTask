'use client'

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"
import dynamic from 'next/dynamic'
import { useState, useRef, useEffect } from "react" // <-- Added useEffect import
import CountUp from 'react-countup' // Ensure this import is present for CountUp functionality
const DynamicMoneyScene = dynamic(() => import('./MoneyScene').then(mod => mod.MoneyScene), {
  ssr: false,
  loading: () => <div className="h-full w-full absolute inset-0 -z-10 bg-black" />
})
const numbers = [
  { id: 1, number: 5, title: "courses" },
  { id: 2, number: 100, title: "learning hours" },
  { id: 3, number: 500, title: "happy clients" },
  { id: 4, number: 5, title: "years of teaching" }
];
export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black via-gray-900 to-[#1a223a] overflow-hidden">
      <DynamicMoneyScene />
      <div className="container relative mx-auto px-10 py-10 sm:py-12">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white mb-6">
              Own Your Tomorrow
            </h1>
            <p className="max-w-[600px] text-gray-400 md:text-xl mx-auto lg:mx-0">
              Experience the next generation of financial technology. Our platform combines cutting-edge AI with seamless user experience to revolutionize how you manage your money.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                Get Started
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-gray-800 hover:text-white "
              >
                Watch Demo
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-700 rounded-full blur-3xl opacity-20 animate-pulse" />
              <Image
                src="/assets/Nav/Banner.png"
                alt="Founder"
                width={500}
                height={500}
                className="relative rounded-2xl object-cover"
                priority
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-4 text-center"
            >
            </motion.div>
          </motion.div>
        </div>
      </div>
    
      <section className="mx-auto relative z-[10] text-white flex justify-center p-6 bg-transparent ">
        <header
          className="absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-transparent left-10 top-0 hidden md:block"
        />
        <motion.section
          ref={sectionRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative z-1 mx-auto w-11/12 lg:mx-0 p-5 sm:p-6 py-6 sm:py-8 rounded-3xl
          border-[#3a6073] bg-transparent shadow-lg md:divide-x divide-primary grid grid-cols-2
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
    </div>
  )
}