import { GoogleAuthProvider } from 'firebase/auth';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import registerImage from '../../assets/svg/signup.svg';
import { AuthContext } from '../../context/AuthProvider';

const Register = () => {
  const { createAccountWithEmailAndPassword, updateCurrentUserProfile, providerLogin } = useContext(AuthContext);

  const handleRegistration = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoUrl = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;

    createAccountWithEmailAndPassword(email, password)
      .then((res) => {
        const user = res.user;
        updateCurrentUserProfile({
          displayName: name,
          photoURL: photoUrl,
        })
          .then(() => {})
          .catch((err) => console.error(err));
      })
      .catch((err) => console.error(err));
  };

  const googleProvider = new GoogleAuthProvider();

  const googleLoginHandler = () => {
    providerLogin(googleProvider)
      .then(() => {})
      .catch((err) => console.error(err));
  };

  return (
    <section className='flex items-center min-h-screen'>
      <div className='mx-auto mt-14 container px-4 py-16 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-16 items-center'>
          <div className='overflow-hidden md:order-last hidden md:block'>
            <img alt='Party' src={registerImage} className=' w-full object-cover' />
          </div>

          <div>
            <form onSubmit={handleRegistration} className='mb-0 space-y-4'>
              <div className='relative'>
                <input
                  type='text'
                  className='w-full  border-gray-200 p-4 pr-12 text-sm shadow-sm'
                  placeholder='Full Name'
                  name='name'
                  required
                />
              </div>
              <div className='relative'>
                <input
                  type='text'
                  className='w-full  border-gray-200 p-4 pr-12 text-sm shadow-sm'
                  placeholder='Photo URL'
                  name='photoUrl'
                  required
                />
              </div>
              <div className='relative'>
                <input
                  type='email'
                  className='w-full  border-gray-200 p-4 pr-12 text-sm shadow-sm'
                  placeholder='Enter email'
                  name='email'
                  required
                />
              </div>
              <div className='relative'>
                <input
                  type='password'
                  className='w-full  border-gray-200 p-4 pr-12 text-sm shadow-sm '
                  placeholder='Enter password'
                  name='password'
                  required
                />
              </div>

              <div className='flex flex-col sm:flex-row items-center justify-between gap-4'>
                <p className=' text-gray-700'>
                  already have an account? &nbsp;
                  <Link to='/login' className='underline text-indigo-600'>
                    login
                  </Link>
                </p>
                <button
                  type='submit'
                  className='ml-3 inline-block  w-48 bg-indigo-600 px-5 py-3 text-sm font-medium text-white'
                >
                  Register
                </button>
              </div>
            </form>
            <div>
              <p className='text-center my-8 font-bold text-gray-900'>OR</p>
              <div className='flex justify-center gap-4'>
                <button onClick={googleLoginHandler} className='bg-indigo-600 px-5 py-3 text-sm font-medium text-white'>
                  Login With Google
                </button>
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
