import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
  const course = useLoaderData();

  return (
    <section className='container flex items-center mx-auto min-h-screen'>
      <div className='mx-auto px-4 py-16 sm:px-6 lg:px-8'>
        <h1>{course.title}</h1>
      </div>
    </section>
  );
};
export default Checkout;
