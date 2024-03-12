import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const navigate = useNavigate();
  return <button onClick={() => navigate('/main')}>Login</button>
};
