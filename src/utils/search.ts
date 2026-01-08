import { Algorithms } from '@/utils/constants';
import type { AlgorithmData } from '@/utils/types';

export const flatAlgorithms = Algorithms.flatMap((category) =>
  category.data.map((algo: AlgorithmData) => ({
    ...algo,
    category: category.category,
  })),
);
