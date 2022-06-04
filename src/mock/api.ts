import { LocationItem } from './type';

export const getLocation = (
  locationItem: LocationItem[]
): Promise<{ status: number; data: LocationItem[] }> => {
  return new Promise<{ status: number; data: LocationItem[] }>(
    (resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.1) {
          resolve({ status: 200, data: locationItem });
        } else {
          reject(new Error('something bad happened'));
        }
      }, 500);
    }
  );
};
