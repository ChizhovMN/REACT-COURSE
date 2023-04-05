import { UseFormRegister } from 'react-hook-form';

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
  register: UseFormRegister<{
    name: string;
    country: string;
    brand: string;
    date: string;
    uploader: FileList | null;
    checkbox: boolean;
  }>;
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

export type FormProps = {
  handleAddCard: (card: FormCardType) => void;
};
export type FormState = {
  name: string;
  country: string;
  brand: string;
  date: string;
  uploader: FileList | null;
  checkbox: boolean;
};

export type RickAndMortyApi = {
  info: {
    count: number;
    next: string;
    pages: number;
    prev: string;
  };
  results: ResultData[];
};
export type ResultData = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Info;
  location: Info;
  image: string;
  episode: string[];
  created: string;
  url: string;
};
export type ModalCardProps = ResultData & { onClick: () => void };
type Info = {
  name: string;
  url: string;
};

export type LocationApi = {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
};
