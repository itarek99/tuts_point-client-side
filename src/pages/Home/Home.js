import { Link, useLoaderData } from 'react-router-dom';
import 'swiper/css';
import heroImage from '../../assets/svg/hero.svg';
import CourseCarousel from './Components/CourseCarousel';

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
        <CourseCarousel title='Best Selling Courses' carouseItems={bestSelling} />
      </section>
      <section>
        <CourseCarousel title='Recommended For You' carouseItems={recommended} />
      </section>
    </main>
  );
};
export default Home;
