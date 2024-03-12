import { Link, Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export const MainPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="one">Page One</Link>
          </li>
          <li>
            <Link to="two">Page Two</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
      <button style={{marginTop: '20px'}} onClick={() => navigate('/')}>Log Out</button>
    </>
  );
};
