export interface LocationItem {
  id: string;
  image: string;
  title: string;
  description: string;
}

export interface UserItem {
  id: string;
  name: string;
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
