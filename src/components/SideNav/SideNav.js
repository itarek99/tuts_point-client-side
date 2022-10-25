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
        <Link to={`/topic/${item.tag}`} className='block'>
          {item.title}
        </Link>
      ))}
    </div>
  );
};
export default SideNav;
