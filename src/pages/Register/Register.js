import { useContext } from 'react';
import { Link } from 'react-router-dom';
import registerImage from '../../assets/svg/signup.svg';
import { AuthContext } from '../../context/AuthProvider';

const Register = () => {
  const five = useContext(AuthContext);

  return (
    <section className='flex items-center min-h-screen'>
      <div className='mx-auto mt-14 container px-4 py-16 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-16 items-center'>
          <div className='overflow-hidden md:order-last hidden md:block'>
            <img alt='Party' src={registerImage} className=' w-full object-cover' />
          </div>

          <div>
            <form class='mb-0 space-y-4'>
              <div class='relative'>
                <input
                  type='text'
                  class='w-full  border-gray-200 p-4 pr-12 text-sm shadow-sm'
                  placeholder='Full Name'
                />
              </div>
              <div class='relative'>
                <input
                  type='text'
                  class='w-full  border-gray-200 p-4 pr-12 text-sm shadow-sm'
                  placeholder='Photo URL'
                />
              </div>
              <div class='relative'>
                <input
                  type='email'
                  class='w-full  border-gray-200 p-4 pr-12 text-sm shadow-sm'
                  placeholder='Enter email'
                />
              </div>
              <div class='relative'>
                <input
                  type='password'
                  class='w-full  border-gray-200 p-4 pr-12 text-sm shadow-sm '
                  placeholder='Enter password'
                />
              </div>

              <div class='flex flex-col sm:flex-row items-center justify-between gap-4'>
                <p class=' text-gray-700'>
                  already have an account? &nbsp;
                  <Link to='/login' class='underline text-indigo-600'>
                    login
                  </Link>
                </p>
                <button
                  type='submit'
                  class='ml-3 inline-block  w-48 bg-indigo-600 px-5 py-3 text-sm font-medium text-white'
                >
                  Login
                </button>
              </div>
            </form>
            <div>
              <p className='text-center my-8 font-bold text-gray-900'>OR</p>
              <div className='flex justify-center gap-4'>
                <button className='bg-indigo-600 px-5 py-3 text-sm font-medium text-white'>Login With Google</button>
                <button className='bg-indigo-600 px-5 py-3 text-sm font-medium text-white'>Login With GitHub</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Register;
