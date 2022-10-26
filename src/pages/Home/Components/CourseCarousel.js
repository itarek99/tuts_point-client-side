import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const CourseCarousel = ({ carouseItems, title }) => {
  return (
    <div className='mx-auto container px-4 py-12 sm:px-6 lg:px-8'>
      <h2 className='text-2xl md:text-4xl font-bold mb-6'>{title}</h2>
      <Swiper
        breakpoints={{
          480: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
          1280: {
            slidesPerView: 5,
          },
        }}
        // autoplay={{ delay: 2000 }}
        loop={true}
        spaceBetween={20}
        modules={[Autoplay]}
      >
        {carouseItems.map((course) => (
          <SwiperSlide key={course.id}>
            <img alt='Art' src={course.thumb_url} className='w-full object-cover' />
            <h3 className='mt-2 font-bold text-gray-900'>
              {course.title.length > 45 ? course.title.slice(0, 45) + '...' : course.title}
            </h3>
            <p className='mt-1 font-semibold text-gray-700 text-sm'>{course.author}</p>
            <p className='mt-1 font-bold text-sm  text-gray-700'>
              <span className='text-amber-600'>{course.average_rating}</span> ({course.total_rating})
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default CourseCarousel;
