export interface BusinessData {
  _id: string;
  name: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
  status: string;
  logo: string;
  giftCard: {}[];
}
export interface UserData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface cardData {
  _id: string;
  BrandLogo: string;
  BusinessCode: string;
  colour: string;
  moneyWorth: number;
  uniqueID: string;
}

export interface UserDetails {
  name: string;
  username: string;
  email: string;
  image: string;
  phoneNumber: number;
  password: string;
  confirmPassword: string;
  status: string;
}
