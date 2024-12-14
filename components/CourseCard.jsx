import Image from 'next/image'
import Link from 'next/link'

const CourseCard = ({ course, isHovered, onHover, onLeave }) => {
  return (
    <Link href={course.link}>
      <div
        className={`relative overflow-hidden rounded-lg shadow-lg transition-transform duration-500 ease-in-out p-4 cursor-pointer ${
          isHovered ? 'scale-105 rotate-3d' : ''
        }`}
        style={{
          transform: isHovered ? 'rotateX(5deg) rotateY(5deg)' : 'none',
          transformStyle: 'preserve-3d',
          perspective: '1000px',
        }}
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
      >
        <div
          className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-75 transition-opacity duration-300 ${
            isHovered ? 'opacity-80' : 'opacity-75'
          }`}
        />
        
        <div className="relative z-10 p-6">
          <div className="aspect-video mb-4 overflow-hidden rounded-lg">
            <Image
              src={course.image}
              alt={course.title}
              width={600}
              height={400}
              className="object-cover w-full h-full transition-transform duration-500 ease-in-out"
              style={{
                transform: isHovered ? 'scale(1.15)' : 'scale(1)',
              }}
            />
          </div>
          
          <h2 className="text-2xl font-bold mb-2 text-white transition-colors duration-300 ease-in-out">
            {course.title}
          </h2>
          <p className="mb-2 text-gray-200">{course.description}</p>

          <div className="mb-4">
            <p className="text-lg text-gray-400 line-through">{course.originalPrice}</p>
            <p className="text-2xl font-semibold text-yellow-400">{course.discountPrice}</p>
          </div>

          <span
            className={`inline-block px-4 py-2 rounded-full font-semibold border-2 border-white transition-all duration-300 ease-in-out ${
              isHovered
                ? 'bg-white text-gray-800 border-white'
                : 'bg-transparent text-white border-white hover:bg-white hover:text-gray-800'
            }`}
          >
            Learn More
          </span>
        </div>
        
        <div
          className="absolute inset-0 bg-white opacity-10 transition-transform duration-300 ease-in-out"
          style={{
            transform: isHovered ? 'translateZ(40px)' : 'none',
          }}
        />
      </div>
    </Link>
  )
}

export default CourseCard
