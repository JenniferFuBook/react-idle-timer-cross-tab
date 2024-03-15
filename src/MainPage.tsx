import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useConfiguredIdleTimer } from './useConfiguredIdleTimer';

export const MainPage = () => {
  useConfiguredIdleTimer();
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
      <button style={{marginTop: '20px'}} onClick={() => navigate('/')}>Logout</button>
    </>
  );
};
