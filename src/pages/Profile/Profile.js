import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const Profile = () => {
  const { logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.error(err));
  };

  const { user } = useContext(AuthContext);

  return (
    <section className='flex items-center mx-auto min-h-screen'>
      <div className='mx-auto mt-10 container px-4 py-16 sm:px-6 lg:px-8'>
        <article class='max-w-xs mx-auto  bg-white transition hover:shadow-xl'>
          <img
            alt={user?.displayName}
            src={
              user && user.photoURL
                ? user.photoURL
                : 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png'
            }
            class='aspect-square h-full w-full object-cover'
          />
          <div class='flex flex-1 flex-col justify-between'>
            <div class='border-l border-gray-900/10 sm:border-l-transparent sm:p-6'>
              <h3 class='font-bold uppercase text-gray-900'>{user?.displayName}</h3>
              <p class=' text-sm leading-relaxed text-gray-700 line-clamp-3'>{user?.email}</p>
            </div>

            <button
              onClick={handleLogOut}
              class='block w-full bg-red-600 px-5 py-3 text-center text-sm font-bold uppercase text-white transition hover:bg-red-700'
            >
              LOG OUT
            </button>
          </div>
        </article>
      </div>
    </section>
  );
};
export default Profile;
