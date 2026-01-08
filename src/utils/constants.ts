import type { Algorithm, AlgorithmIndexing } from '@/utils/types';

export const Algorithms: Algorithm[] = [
  {
    category: 'Sorting',
    data: [
      {
        id: 'selection-sort',
        name: 'Selection Sort',
        image: '/sample.png',
        description:
          "Selection Sort repeatedly scans the unsorted portion of the array, selects the smallest element, and swaps it into its correct position at the front. It's simple, predictable, and brutally inefficient on large inputs—great for learning, not for speed.",
        route: '/sorting/selection-sort',
      },
      {
        id: 'quick-sort',
        name: 'Quick Sort',
        image: '/sample.png',
        description: '',
        route: '/sorting/quick-sort',
      },
    ],
  },
  {
    category: 'Searching',
    data: [
      {
        id: 'binary-search',
        name: 'Binary Search',
        image: '/sample.png',
        description: '',
        route: '/searching/binary-search',
      },
    ],
  },
];

export const algorithmIndex: AlgorithmIndexing = Algorithms.reduce(
  (acc, cat) => {
    const key = cat.category.toLowerCase();
    acc[key] = {};
    cat.data.forEach((algo) => {
      acc[key][algo.id] = algo;
    });
    return acc;
  },
  {} as AlgorithmIndexing,
);

export const GLOBAL_SEARCH = 'global_search';
