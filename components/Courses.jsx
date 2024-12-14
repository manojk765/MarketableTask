'use client'

import React, { useState } from 'react'
import CourseCard from './CourseCard'

const courses = [
  {
    id: 1,
    title: 'Introduction to Crypto trading for Beginners',
    description: 'Explore our 100% free Crypto Trading Series.',
    image: '/assets/Demo/youtube.jpg',
    link: 'https://www.youtube.com/playlist?list=PLUUBYZiq6jSSLlkrREDMpqVIlG-JqUpyw',
    color: 'from-blue-500 to-blue-700',
    discountPrice:'Free' 
  },
  {
    id: 2,
    title: '20 Days of Trading',
    description: 'Learn Crypto Trading From Scratch in 20 Days.',
    image:'/assets/Demo/course1.jpg',
    link: 'https://marketable.graphy.com/courses/20-Days-of-Trading-65708524e4b0a38e213479f1?page=checkout&reqparams=pid%3Dp1&newCheckoutFlowParams=FREE',
    color: 'from-green-500 to-green-700',
    originalPrice:6000,
    discountPrice:4000 
  },
  {
    id: 3,
    title: 'Advanced trading concepts',
    description: 'Zero to Hero: Mastering SMC(Smart Money Concepts) Advanced Trading Concepts.',
    image: '/assets/Demo/course2.jpg',
    link: 'https://marketable.graphy.com/courses/Ultimate-Trading-CourseBeginner-to-Advanced-level-MALAYALAM-65708951e4b002d28060f4ad?page=checkout&reqparams=pid%3Dp1&newCheckoutFlowParams=FREE',
    color: 'from-purple-500 to-purple-700',
    originalPrice:5000,
    discountPrice:3000
  },
]

const CoursesGrid = () => {
  const [hoveredCourse, setHoveredCourse] = useState(null)

  return (
    <div className="grid grid-cols-1 relative z-[10] md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 bg-[#111827]">
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          course={course}
          isHovered={hoveredCourse === course.id}
          onHover={() => setHoveredCourse(course.id)}
          onLeave={() => setHoveredCourse(null)}
        />
      ))}
    </div>
  )
}

export default CoursesGrid
