import { PDFDownloadLink } from '@react-pdf/renderer';
import { FaFileDownload } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import Pdf from '../Others/Pdf';

const Course = () => {
  const course = useLoaderData();

  return (
    <section>
      <div className='mx-auto container px-4 py-16 sm:px-6 lg:px-8'>
        <div className='pt-8 max-w-4xl mx-auto'>
          <div className='mb-6 text-end'>
            <PDFDownloadLink
              document={
                <Pdf
                  title={course.title}
                  image={course.thumb_url}
                  description={course.description}
                  topics={course.topics}
                />
              }
              fileName='outline'
            >
              {({ loading }) =>
                loading ? (
                  <button>Loading Document</button>
                ) : (
                  <button className='bg-indigo-600 text-white p-2'>
                    <FaFileDownload className='text-xl' />
                  </button>
                )
              }
            </PDFDownloadLink>
          </div>

          <article className='flex flex-col md:flex-row bg-white transition shadow-xl mb-12'>
            <div className='flex flex-1 flex-col justify-between order-2 md:order-1'>
              <div className='border-l border-gray-900/10 pt-4 p-6 sm:border-l-transparent'>
                <h3 className='font-xl md:text-2xl font-bold uppercase text-gray-900'>{course.title}</h3>
                <p className='mt-1 text-sm text-gray-700'>{course.summary}</p>
                <p className='mt-1 text-sm text-gray-700'>{course.author}</p>
                <p className='mt-1 text-sm text-gray-900 font-bold'>{course.duration} total hours</p>
              </div>
            </div>
            <div className='basis-1/3 order-1 md:order-2'>
              <img alt={course.title} src={course.thumb_url} className='w-full h-full object-cover' />
            </div>
          </article>
          <div>
            <h2 className='text-3xl font-bold mb-3'>What you'll learn</h2>
            <ul className='grid grid-cols-1 md:grid-cols-2 mb-8 gap-y-4 gap-x-8 pl-5'>
              {course.topics.map((topic, i) => (
                <li key={i} className='list-disc'>
                  {topic}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className='text-3xl font-bold mb-3'>Description</h2>
            <p>{course.description}</p>
          </div>
          <div className='mt-12'>
            <Link
              to={`/checkout/${course.id}`}
              className='block mx-auto w-56 bg-indigo-600 px-5 py-3 text-center text-xs font-bold uppercase text-white transition hover:bg-indigo-700'
            >
              Buy Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Course;
