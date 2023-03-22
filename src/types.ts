export type CardType = {
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
  products: CardType[];
};

export type AppStateProps = {
  search: string;
  cards: ProductsType;
};
export type MainPropsType = {
  onChangeSearch: (search: string) => void;
  products: CardType[];
  search: string;
};

export type InputProps = {
  passedRef: React.RefObject<HTMLInputElement>;
  children: React.ReactNode;
};

export type LabelProps = {
  classNames: string[];
  htmlFor: string;
  labelText: string;
};
