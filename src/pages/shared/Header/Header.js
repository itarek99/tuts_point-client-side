import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/brands/logo.png';
import { AuthContext } from '../../../context/AuthProvider';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [toggle, setToggle] = useState(true);
  const [showName, setShowName] = useState(false);

  console.log(user);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.error(err));
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleHover = () => {
    setShowName(!showName);
  };

  return (
    <header aria-label='Site Header' className='bg-white dark:bg-gray-900 fixed w-full z-10 shadow-lg py-1'>
      <div className='mx-auto flex h-16 container items-center justify-between gap-8 px-4 sm:px-6 lg:px-8'>
        <Link to='/' className='flex items-center gap-2 text-indigo-600 dark:text-teal-300 text-2xl font-bold'>
          <img className='h-10' src={logo} alt='logo' /> <span className='hidden sm:block'>tuts point</span>
        </Link>
        <nav aria-label='Site Nav' className='hidden md:block'>
          <ul className='flex items-center gap-6 text-md'>
            <li>
              <Link
                to='/topic'
                className='text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75'
              >
                Courses
              </Link>
            </li>
            <li>
              <a
                className='text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75'
                href='/'
              >
                Blogs
              </a>
            </li>
            <li>
              <a
                className='text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75'
                href='/'
              >
                FAQs
              </a>
            </li>
            <li>
              <button
                onClick={handleLogOut}
                className='text-red-500 font-semibold transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75'
              >
                Log Out
              </button>
            </li>
          </ul>
        </nav>
        <div className='flex items-center gap-4'>
          {user ? (
            <div className='relative flex justify-end items-center gap-2 cursor-pointer w-32'>
              <p
                className={`absolute w-full  text-right -left-10 text-sm font-bold text-indigo-600 ${
                  showName ? 'block' : 'hidden'
                }`}
              >
                {user.displayName}
              </p>
              <img
                onMouseEnter={handleHover}
                onMouseLeave={handleHover}
                className='h-8 rounded-full'
                src={user.photoURL}
                alt={user.displayName}
              />
            </div>
          ) : (
            <div className='flex items-center gap-3'>
              <Link
                to='/login'
                className='block  bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-indigo-700 dark:hover:bg-indigo-800'
              >
                Login
              </Link>

              <Link
                to='/register'
                className='hidden  bg-gray-100 px-5 py-2.5 text-sm font-medium text-indigo-600 transition hover:text-indigo-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75 sm:block'
              >
                Register
              </Link>
            </div>
          )}

          <button
            onClick={handleToggle}
            className='block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75 md:hidden'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth='2'
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='M4 6h16M4 12h16M4 18h16' />
            </svg>
          </button>
        </div>
      </div>

      <div className={`absolute top-20 left-0 right-0  max-w-xl mx-auto px-4 ${toggle ? 'hidden' : 'block'}`}>
        <ul className='bg-gray-100 shadow-lg py-4'>
          <li className='text-center'>
            <Link
              to='/topic'
              className='text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75'
            >
              Courses
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};
export default Header;
