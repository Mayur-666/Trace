import { Algorithms } from '@/utils/constants';

export const flatAlgorithms = Algorithms.flatMap((category) =>
  category.data.map((algo) => ({
    ...algo,
    category: category.category,
  })),
);
