export type AlgorithmData = {
  id: string;
  name: string;
  image: string;
  description: string;
  route: string;
};

export type Algorithm = {
  category: string;
  data: AlgorithmData[];
};

export type AlgorithmIndexing = Record<string, Record<string, AlgorithmData>>;
