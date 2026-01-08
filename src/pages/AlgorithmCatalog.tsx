import AlgorithmCard from '@/components/AlgorithmCard';
import GlobalSearch from '@/modules/GlobalSearch/GlobalSearch';
import { Algorithms } from '@/utils/constants';
import type { AlgorithmData } from '@/utils/types';

function AlgorithmCatalog() {
  return (
    <main className="w-full h-full p-4 md:p-8">
      <GlobalSearch />

      <div className="py-2">
        {Algorithms.map((algo) => (
          <div key={algo.category} className="py-4">
            <div className="py-4">
              <h2 className="uppercase text-4xl pl-0.5">{algo.category}</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {algo.data.map((d: AlgorithmData) => (
                <AlgorithmCard key={d.id} algorithm={d} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default AlgorithmCatalog;
