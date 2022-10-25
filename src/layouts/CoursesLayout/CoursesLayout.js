import { Outlet } from 'react-router-dom';
import SideNav from '../../components/SideNav/SideNav';
import Header from '../../pages/shared/Header/Header';

const CoursesLayout = () => {
  return (
    <>
      <Header />
      <div className='mx-auto container px-4 py-16 sm:px-6 lg:px-8'>
        <div className='grid pt-10 grid-cols-1 md:grid-cols-4 gap-0 md:gap-8'>
          <SideNav />
          <div className='col-span-3'>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};
export default CoursesLayout;
