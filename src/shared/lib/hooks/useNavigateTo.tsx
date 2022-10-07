import { useNavigate } from 'react-router-dom';

export const useNavigateTo = (route: string) => {
  const navigate = useNavigate();
  return () => navigate(route);
};
