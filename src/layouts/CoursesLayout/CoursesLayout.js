import { Outlet } from 'react-router-dom';
import SideNav from '../../components/SideNav/SideNav';
import Header from '../../pages/shared/Header/Header';

const CoursesLayout = () => {
  return (
    <>
      <Header />
      <div className='mx-auto container px-4 py-16 sm:px-6 lg:px-8'>
        <div class='grid pt-20 grid-cols-4 gap-4'>
          <SideNav />
          <div class='col-span-3'>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};
export default CoursesLayout;
