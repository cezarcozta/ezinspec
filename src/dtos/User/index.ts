interface IBussiness {
  _id: string;
  bussiness: string;
}

export interface User {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
  typeBusiness: IBussiness;
  city: string;
  province: string;
  phone: string;
}