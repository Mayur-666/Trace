import type { Algorithm } from '@/utils/types';

export const Algorithms: Algorithm[] = [
  {
    category: 'Sorting',
    data: [
      {
        id: 'Sorting-1',
        name: 'Selection Sort',
        image: '/sample.png',
        description:
          "Selection Sort repeatedly scans the unsorted portion of the array, selects the smallest element, and swaps it into its correct position at the front. It's simple, predictable, and brutally inefficient on large inputs—great for learning, not for speed.",
        route: '/sorting/selection-sort',
      },
      {
        id: 'Sorting-2',
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
        id: 'Searching-1',
        name: 'Binary Search',
        image: '/sample.png',
        description: '',
        route: '/searching/binary-search',
      },
    ],
  },
];

export const GLOBAL_SEARCH = 'global_search';
