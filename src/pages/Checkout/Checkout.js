import { Link, useLoaderData } from 'react-router-dom';

const Checkout = () => {
  const course = useLoaderData();

  return (
    <section className='container flex items-center mx-auto min-h-screen'>
      <div className='mx-auto max-w-sm px-4 py-16 sm:px-6 lg:px-8'>
        <h1 className='text-xl font-semibold mb-4'>You paying for "{course.title}"</h1>
        <form className='space-y-4 '>
          <div>
            <input className='w-full border-gray-200 p-3 text-sm' placeholder='Card Number' type='text' id='number' />
          </div>
          <div>
            <input className='w-full border-gray-200 p-3 text-sm' placeholder='Cardholder Name' type='text' id='name' />
          </div>

          <div className='grid grid-cols-3 gap-4'>
            <div>
              <input className='w-full border-gray-200 p-3 text-sm' placeholder='12' type='email' id='email' />
            </div>
            <div>
              <input className='w-full border-gray-200 p-3 text-sm' placeholder='2022' type='email' id='email' />
            </div>

            <div>
              <input className='w-full border-gray-200 p-3 text-sm' placeholder='CVV' type='tel' id='phone' />
            </div>
          </div>

          <div className='mt-4 flex justify-between'>
            <button
              type='submit'
              className='inline-flex w-full items-center justify-center bg-indigo-600 px-5 py-2 text-white sm:w-auto'
            >
              <span className='font-medium'> Confirm And Pay {course.price}$ </span>
            </button>

            <Link
              to='/topic'
              type='submit'
              className='inline-flex w-full items-center justify-center bg-red-600 px-5 py-2 text-white sm:w-auto'
            >
              <span className='font-medium'> Cancel </span>
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};
export default Checkout;
