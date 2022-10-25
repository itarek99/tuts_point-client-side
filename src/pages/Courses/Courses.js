import { Link, useLoaderData } from 'react-router-dom';

const Courses = () => {
  const courses = useLoaderData();

  return (
    <div>
      {courses.map((course) => (
        <Link key={course.id} to={`/course/${course.id}`}>
          <article className='flex flex-col items-center sm:flex-row bg-white transition shadow-xl mb-6'>
            <div className='basis-1/3'>
              <img alt={course.title} src={course.thumb_url} className='w-full h-full object-cover' />
            </div>
            <div className='flex flex-1 flex-col justify-between'>
              <div className='border-l border-gray-900/10 px-6 sm:border-l-transparent'>
                <h3 className='font-bold uppercase text-gray-900'>{course.title}</h3>
                <p className='mt-1 text-sm text-gray-700'>{course.summary}</p>
                <p className='mt-1 text-sm text-gray-700'>{course.author}</p>
                <p className='mt-1 text-sm text-gray-900 font-bold'>{course.duration} total hours</p>
              </div>
              <div className='sm:flex sm:items-end sm:justify-end'></div>
            </div>
          </article>
        </Link>
      ))}
    </div>
  );
};
export default Courses;
