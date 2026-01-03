export type CardData = {
  id: string;
  name: string;
  image: string;
  description: string;
  route: string;
};

export type Algorithm = {
  category: string;
  data: CardData[];
};
