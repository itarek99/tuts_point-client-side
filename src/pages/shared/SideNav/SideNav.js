import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SideNav = () => {
  const [nav, setNav] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/category')
      .then((res) => res.json())
      .then((result) => setNav(result));
  }, []);

  return (
    <div>
      {nav.map((item) => (
        <Link key={item.id} to={`/topic/${item.tag}`} className='block border mb-3 px-3 py-2 text-sm w-full'>
          {item.title}
        </Link>
      ))}
    </div>
  );
};
export default SideNav;
