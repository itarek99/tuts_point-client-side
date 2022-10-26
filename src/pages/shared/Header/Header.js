import { useContext, useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../../assets/brands/logo.png';
import { AuthContext } from '../../../context/AuthProvider';

const Header = () => {
  const { user } = useContext(AuthContext);
  const [toggle, setToggle] = useState(true);
  const [showName, setShowName] = useState(false);

  console.log(user);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleHover = () => {
    setShowName(!showName);
  };

  return (
    <header aria-label='Site Header' className='bg-white dark:bg-gray-900 fixed w-full z-10 shadow-lg py-1'>
      <div className='mx-auto flex h-16 container items-center justify-between gap-8 px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center gap-6'>
          <Link to='/' className='flex items-center gap-2 text-indigo-600 dark:text-teal-300 text-2xl font-bold'>
            <img className='h-10' src={logo} alt='logo' /> <span className='hidden sm:block'>tuts point</span>
          </Link>

          <label htmlFor='AcceptConditions' className='relative h-8 w-14 cursor-pointer'>
            <input
              type='checkbox'
              id='AcceptConditions'
              className='peer sr-only [&:checked_+_span_svg[data-unchecked-icon]]:hidden [&:checked_+_span_svg[data-checked-icon]]:block'
            />

            <span className='absolute inset-0 z-10 m-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-gray-400 transition peer-checked:translate-x-6 peer-checked:text-indigo-600'>
              <svg
                data-unchecked-icon
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                viewBox='0 0 16 16'
              >
                <path d='M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z' />
              </svg>

              <svg
                data-checked-icon
                xmlns='http://www.w3.org/2000/svg'
                className='hidden'
                width='16'
                height='16'
                viewBox='0 0 16 16'
                fill='currentColor'
              >
                <path d='M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z' />
                <path d='M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z' />
              </svg>
            </span>

            <span className='absolute inset-0 rounded-full bg-gray-400 transition peer-checked:bg-indigo-600'></span>
          </label>
        </div>

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
              <Link
                to='/blog'
                className='text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75'
              >
                Blogs
              </Link>
            </li>
            <li>
              <a
                className='text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75'
                href='/'
              >
                FAQs
              </a>
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
              <Link to='/profile'>
                <div onMouseEnter={handleHover} onMouseLeave={handleHover} className='h-8 rounded-full'>
                  {user?.photoURL ? (
                    <img className='h-full rounded-full' src={user.photoURL} alt={user.displayName} />
                  ) : (
                    <FaUserCircle className='h-8 text-3xl' />
                  )}
                </div>
              </Link>
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
