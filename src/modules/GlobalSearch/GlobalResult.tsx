import { useAppSelector } from '@/hooks/hooks';
import { flatAlgorithms } from '@/utils/search';
import type { CardData } from '@/utils/types';

interface GlobalResultProps {
  handleSelect: (route: CardData['route']) => void;
}

function GlobalResult({ handleSelect }: GlobalResultProps) {
  const { query } = useAppSelector((state) => state.global_search);

  const results = query
    ? flatAlgorithms.filter(
        (algo) =>
          algo.name.toLowerCase().includes(query.toLowerCase()) ||
          algo.category.toLowerCase().includes(query.toLowerCase()),
      )
    : [];

  return (
    results.length > 0 && (
      <ul className="absolute flex flex-col min-w-100 w-fit top-18 left-1/2 transform -translate-x-1/2 right-0 bg-neutral-900 rounded-xl shadow-xl overflow-hidden">
        {results.map((algo) => (
          <button
            key={algo.id}
            onMouseDown={() => handleSelect(algo.route)}
            className="px-5 py-3 flex w-full items-center justify-between gap-4 cursor-pointer hover:bg-neutral-800"
          >
            <p className="text-sm text-white">{algo.name}</p>
            <p className="text-xs text-gray-400">{'(' + algo.category + ')'}</p>
          </button>
        ))}
      </ul>
    )
  );
}

export default GlobalResult;
