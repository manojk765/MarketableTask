import React from 'react';

function ReviewCard({ content, imgSrc, name, company, rating }) {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill={i <= rating ? '#ffcc00' : '#4b5563'} // Gold for filled stars, gray for empty stars
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className="relative p-6 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 min-w-[320px] lg:min-w-[420px] bg-white/10 backdrop-blur-lg">
      {/* Glassmorphism background */}
      <div className="absolute inset-0 bg-white/10 rounded-xl blur-md"></div>

      {/* Review card content */}
      <div className="relative z-10">
        <div className="flex items-center gap-1 mb-4">
          {renderStars()}
        </div>

        <p className="text-gray-300 dark:text-gray-200 mb-6 leading-relaxed">
          {content}
        </p>

        <div className="flex items-center gap-4 mt-auto">
          <figure className="rounded-full overflow-hidden w-12 h-12 border-2 border-gray-700">
            <img
              src={imgSrc}
              alt={name}
              width={48}
              height={48}
              loading="lazy"
              className="object-cover w-full h-full"
            />
          </figure>

          <div>
            <p className="text-gray-100 dark:text-white font-medium">{name}</p>
            <p className="text-sm text-gray-400 dark:text-gray-500">{company}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
