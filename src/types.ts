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
  products: CardType[];
};

export type InputProps = {
  passedRef: React.RefObject<HTMLInputElement>;
  children: React.ReactNode;
};
export type SelectProps = {
  passedRef: React.RefObject<HTMLSelectElement>;
  children: React.ReactNode;
};
export type RadioGroupProps = {
  appleRef: React.RefObject<HTMLInputElement>;
  samsungRef: React.RefObject<HTMLInputElement>;
  huaweiRef: React.RefObject<HTMLInputElement>;
};
export type RadioProps = {
  passedRef: React.RefObject<HTMLInputElement>;
  brand: string;
  defaultCheck?: boolean;
};
export type LabelProps = {
  classNames: string[];
  htmlFor: string;
  labelText: string;
};
export type FieldWrapperProps = {
  label: LabelProps;
  children: React.ReactNode;
};

export type FormCardType = {
  img: string;
  personalData: string;
  location: string;
  postIndex: string;
  deliveryDate: string;
  brand: string;
};
export type FormCardProps = FormCardType;
