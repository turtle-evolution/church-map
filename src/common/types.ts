export interface IUser {
  id: string;
  name: string;
  username: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: number;
      lng: number;
    };
  };
}

export interface IChurch {
  id: number;
  name: string;
  address: string;
  images: string;
  description: string;
}
