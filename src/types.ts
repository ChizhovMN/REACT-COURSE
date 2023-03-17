export type CardsType = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

export type ProductsType = {
  products: CardsType[];
};

export type AppStateProps = {
  search: string;
  location: string;
  cards: ProductsType;
};
export type MainPropsType = {
  onChangeSearch: (search: string) => void;
  products: CardsType[];
  search: string;
};
