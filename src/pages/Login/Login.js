import { Link } from 'react-router-dom';
import loginImage from '../../assets/svg/login.svg';

const Login = () => {
  return (
    <section className='flex items-center min-h-screen'>
      <div className='mx-auto mt-10 container px-4 py-16 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-16 items-center'>
          <div className='overflow-hidden md:order-last h-full hidden md:block'>
            <img alt='Party' src={loginImage} className='w-full object-cover' />
          </div>

          <div>
            <form action='' class='mb-0 space-y-6'>
              <div>
                <label for='email' class='sr-only'>
                  Email
                </label>

                <div class='relative'>
                  <input
                    type='email'
                    class='w-full  border-gray-200 p-4 pr-12 text-sm shadow-sm'
                    placeholder='Enter email'
                  />
                </div>
              </div>

              <div>
                <label for='password' class='sr-only'>
                  Password
                </label>
                <div class='relative'>
                  <input
                    type='password'
                    class='w-full  border-gray-200 p-4 pr-12 text-sm shadow-sm '
                    placeholder='Enter password'
                  />
                </div>
              </div>

              <div class='flex items-center justify-between'>
                <p class=' text-gray-700'>
                  no account? &nbsp;
                  <Link to='/register' class='underline text-indigo-600'>
                    register
                  </Link>
                </p>
                <button type='submit' class='ml-3 inline-block  bg-indigo-600 px-5 py-3 text-sm font-medium text-white'>
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
export default Login;
