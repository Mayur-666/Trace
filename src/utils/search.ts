import { Algorithms } from '@/utils/constants';
import type { Algorithm, AlgorithmData } from '@/utils/types';

export type FlatAlgorithm = AlgorithmData & {
  category: Algorithm['category'];
};

export const flatAlgorithms: FlatAlgorithm[] = Algorithms.flatMap((category) =>
  category.data.map((algo: AlgorithmData) => ({
    ...algo,
    category: category.category,
  })),
);
