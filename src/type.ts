export interface IService {
  _id?: string;
  title: string;
  desc: string;
  price: number;
  img: string;
}

export interface IAuthData {
  name: string;
  email: string;
  id: string;
  role: string;
  status: string;
  token: string;
}

export interface IDashboardStats {
  totalUser: number;
  totalOrder: number;
  totalProduct: number;
  totalStore: number;
}
