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
          fill={i <= rating ? '#fbbf24' : '#d1d5db'}
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg min-h-[350] transition-shadow duration-300 min-w-[320px] flex flex-col lg:min-w-[420px]">

      <div className="flex items-center gap-1 mb-4">
        {renderStars()}
      </div>

      <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
        {content}
      </p>

      <div className="flex items-center gap-4 mt-auto">
        <figure className="rounded-full overflow-hidden w-12 h-12">
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
          <p className="text-gray-900 dark:text-white font-medium">{name}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">{company}</p>
        </div>
      </div>

    </div>
  );
}

export default ReviewCard;
