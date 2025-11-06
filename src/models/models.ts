export type TCurrentId = string | null;

export interface IForm {
  name: string;
  price: string;
}

export interface IProduct {
  id: string;
  name: string;
  price: number | string;
}

export interface IStore {
  currentId: TCurrentId;
  filter: string;
  form: IForm;
  products: IProduct[];
}
