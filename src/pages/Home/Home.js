const Home = () => {
  return (
    <main>
      <section className='flex items-center h-screen'>
        <div class='mx-auto mt-16 container px-4 py-16 sm:px-6 lg:px-8'>
          <div class='grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16'>
            <div class='relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full'>
              <img
                alt='Party'
                src='https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                class='absolute inset-0 h-full w-full object-cover'
              />
            </div>

            <div class='lg:py-24'>
              <h1 class='text-3xl font-bold md:text-5xl'>Improve Your Online Learning Experience Better Instantly</h1>

              <p class='mt-4 text-gray-600'>
                We have 40k+ Online courses & 500K+ Online registered student. Find your desired Courses from them.
              </p>

              <a
                href='#'
                class='mt-8 inline-flex items-center  border border-indigo-600 bg-blue-700 px-8 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500'
              >
                <span class='text-sm font-medium'> Get Started </span>

                <svg
                  class='ml-3 h-5 w-5'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M17 8l4 4m0 0l-4 4m4-4H3' />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className='h-screen'></section>
    </main>
  );
};
export default Home;
