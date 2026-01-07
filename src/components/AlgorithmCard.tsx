import type { CardData } from '@/utils/types';
import { useNavigate } from 'react-router-dom';

interface AlgorithmCardProps {
  algorithm: CardData;
}
function AlgorithmCard({ algorithm }: Readonly<AlgorithmCardProps>) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (algorithm.route) {
      navigate(algorithm.route);
    }
  };
  return (
    <button
      className={`border border-gray-500 w-full h-full rounded-xl flex flex-col min-h-64 ${algorithm.route ? 'cursor-pointer' : 'cursor-default'}`}
      onClick={handleClick}
    >
      <img
        src={algorithm.image}
        alt={algorithm.name}
        className="flex w-full rounded-t-xl"
      />

      <div className="p-4 flex flex-col gap-2">
        <h2 className="flex capitalize text-2xl">{algorithm.name}</h2>
        <p className="flex text-start text-sm">
          {algorithm.description || 'No desc available.'}
        </p>
      </div>
    </button>
  );
}

export default AlgorithmCard;
