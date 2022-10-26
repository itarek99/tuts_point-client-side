import { Link, useLoaderData } from 'react-router-dom';
import { Autoplay } from 'swiper';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import heroImage from '../../assets/svg/hero.svg';

const Home = () => {
  const courses = useLoaderData();
  const bestSelling = courses.filter((course) => course.best_selling);
  const recommended = courses.filter((course) => course.recommended);

  return (
    <main>
      <section className='flex items-center min-h-screen'>
        <div className='mx-auto mt-10 container px-4 py-16 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 items-center'>
            <div className='overflow-hidden lg:order-last h-full'>
              <img alt='Party' src={heroImage} className='w-full object-cover' />
            </div>

            <div className='text-center lg:text-start lg:py-24'>
              <h1 className='text-3xl text-gray-900 font-bold md:text-4xl xl:text-5xl '>
                Improve Your Online Learning Experience Better Instantly
              </h1>

              <p className='mt-4 text-gray-600'>
                We have 40k+ Online courses & 500K+ Online registered student. Find your desired Courses from them.
              </p>

              <Link
                to='/topic'
                href='#'
                className='mt-8 inline-flex items-center  border border-indigo-600 bg-indigo-600 px-8 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500'
              >
                <span className='text-sm font-medium'> Browse All Courses </span>

                <svg
                  className='ml-3 h-5 w-5'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M17 8l4 4m0 0l-4 4m4-4H3' />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='mx-auto container px-4 py-16 sm:px-6 lg:px-8'>
          <h2 className='text-4xl font-bold mb-4'>Best Selling Courses</h2>
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
            {bestSelling.map((course) => (
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
      </section>
    </main>
  );
};
export default Home;
