import Image from 'next/image'
import Link from 'next/link'

const CourseCard = ({ course, isHovered, onHover, onLeave }) => {
  return (
    <Link href={course.link}>
      <div
        className={`relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 ease-in-out p-4 ${
          isHovered ? 'scale-105' : ''
        }`}
        style={{
          transform: isHovered ? 'rotateX(5deg) rotateY(5deg)' : 'none',
          transformStyle: 'preserve-3d',
        }}
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-75`} />
        <div className="relative z-10 p-6">
          <div className="aspect-video mb-4 overflow-hidden rounded-lg">
            <Image
              src={course.image}
              alt={course.title}
              width={600}
              height={400}
              className="object-cover w-full h-full transition-transform duration-300 ease-in-out"
              style={{
                transform: isHovered ? 'scale(1.1)' : 'none',
              }}
            />
          </div>
          <h2 className="text-2xl font-bold mb-2 text-white">{course.title}</h2>
          <p className="mb-2 text-gray-200">{course.description}</p>

          <div className="mb-4">
            <p className="text-lg text-gray-400 line-through">{course.originalPrice}</p>
            <p className="text-2xl font-semibold text-yellow-400">{course.discountPrice}</p>
          </div>

          <span
            className={`inline-block px-4 py-2 rounded-full font-semibold text-white bg-transparent border-2 border-white transition-all duration-300 ease-in-out hover:text-gray-800 ${
              isHovered ? 'bg-white text-gray-800' : ''
            }`}
          >
            Learn More
          </span>
        </div>
        <div
          className="absolute inset-0 bg-white opacity-10"
          style={{
            transform: isHovered ? 'translateZ(40px)' : 'none',
            transition: 'transform 0.3s ease-in-out',
          }}
        />
      </div>
    </Link>
  )
}

export default CourseCard
