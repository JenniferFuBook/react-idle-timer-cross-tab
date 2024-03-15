import { useIdleTimer } from 'react-idle-timer';
import { useNavigate } from 'react-router-dom';

export const useConfiguredIdleTimer = () => {
  const navigate = useNavigate();
  useIdleTimer({
    timeout: 10_000,
    crossTab: true,
    onIdle: () => {
      navigate('/');
    },
  });
};
