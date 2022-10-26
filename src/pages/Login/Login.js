import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginImage from '../../assets/svg/login.svg';
import { AuthContext } from '../../context/AuthProvider';

const Login = () => {
  const location = useLocation();
  const { logInWithEmailPassword, providerLogin } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';

  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    logInWithEmailPassword(email, password)
      .then(() => {
        navigate(from, { replace: true });
        toast.success('successfully login', { style: { padding: '1rem' } });
        form.reset();
      })
      .catch((err) => {
        toast.error(err.message, { style: { padding: '1rem' } });
      });
  };

  const googleLoginHandler = () => {
    providerLogin(googleProvider)
      .then(() => {
        navigate(from, { replace: true });
        toast.success('successfully login', { style: { padding: '1rem' } });
      })
      .catch((err) => console.error(err));
  };
  const githubLoginHandler = () => {
    providerLogin(githubProvider)
      .then(() => {
        navigate(from, { replace: true });
        toast.success('successfully login', { style: { padding: '1rem' } });
      })
      .catch((err) => console.error(err));
  };

  return (
    <section className='flex items-center min-h-screen'>
      <div className='mx-auto mt-10 container px-4 py-16 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-16 items-center'>
          <div className='overflow-hidden md:order-last h-full hidden md:block'>
            <img alt='Party' src={loginImage} className='w-full object-cover' />
          </div>

          <div>
            <form onSubmit={handleLogIn} className='mb-0 space-y-6'>
              <div className='relative'>
                <input
                  type='email'
                  className='w-full  border-gray-200 p-4 pr-12 text-sm shadow-sm'
                  placeholder='Enter email'
                  name='email'
                />
              </div>

              <div className='relative'>
                <input
                  type='password'
                  className='w-full  border-gray-200 p-4 pr-12 text-sm shadow-sm '
                  placeholder='Enter password'
                  name='password'
                />
              </div>

              <div className='flex items-center justify-between'>
                <p className=' text-gray-700'>
                  no account? &nbsp;
                  <Link to='/register' className='underline text-indigo-600'>
                    register
                  </Link>
                </p>
                <button
                  type='submit'
                  className='ml-3 inline-block  bg-indigo-600 px-5 py-3 text-sm font-medium text-white'
                >
                  Login
                </button>
              </div>
            </form>
            <div>
              <p className='text-center my-8 font-bold text-gray-900'>OR</p>
              <div className='flex justify-center gap-4'>
                <button onClick={googleLoginHandler} className='bg-indigo-600 px-5 py-3 text-sm font-medium text-white'>
                  Login With Google
                </button>
                <button onClick={githubLoginHandler} className='bg-indigo-600 px-5 py-3 text-sm font-medium text-white'>
                  Login With GitHub
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Login;
