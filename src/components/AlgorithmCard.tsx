import type { CardData } from '@/utils/types';

interface AlgorithmCardProps {
  algorithm: CardData;
}
function AlgorithmCard({ algorithm }: Readonly<AlgorithmCardProps>) {
  return (
    <button
      className={`border border-gray-500 w-full h-full rounded-xl flex flex-col min-h-64 ${algorithm.route ? 'cursor-pointer' : 'cursor-default'}`}
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
