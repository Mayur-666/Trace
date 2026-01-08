import { algorithmIndex } from '@/utils/constants';
import { useLocation } from 'react-router-dom';

export default function useFindAlgorithm() {
  const { pathname } = useLocation();
  const path = pathname.split('/');
  const category = path[1];
  const id = path[2];

  return algorithmIndex[category]?.[id];
}
