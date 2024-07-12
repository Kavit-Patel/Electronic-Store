export interface Iuser {
  _id: string;
  name: string;
  surname: string;
  email: string;
  password: string;
  isAdmin: boolean;
}
export interface Iproduct {
  _id: string;
  name: string;
  price: number;
  image: string;
  section: string;
}
export interface Icart {
  _id?: string;
  user: string | Iuser;
  quantity: number;
  product: {
    _id: string;
    name: string;
    price: number;
    image: string;
    section: string;
  };
}
