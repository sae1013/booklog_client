export interface Book {
  author: string;
  description: string;
  image: string;
  isbn: string;
  pubdate: string;
  publisher: string;
  title: string;
}

export interface User {
  email: string;
  name?: string;
  channel?: string;
  status?: string;
  [key]: string;
}

export interface Profile extends User {
  profileUrl: string;
  nickName: string;
  gender?: string;
  address?: string;
  phoneNumber?: string;
}
