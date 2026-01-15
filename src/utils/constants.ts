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
        description:
          'Quick Sort uses a divide-and-conquer strategy by selecting a pivot, partitioning elements around it, and recursively sorting the subarrays. It’s fast in practice, elegant in theory, and dangerously slow only when you anger it with bad pivots.',
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
        description:
          'Binary Search efficiently finds an element in a sorted array by repeatedly dividing the search space in half. It’s logarithmic, surgical, and utterly useless unless the data is already sorted.',
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
export const ALGORITHM_SLICE = 'algorithm_slice';
