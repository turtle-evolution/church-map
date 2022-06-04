import { useEffect, useState } from 'react';

const useIcon = (type: string): string => {
  const [icon, setIcon] = useState<string>('');

  useEffect(() => {
    if (!icon) setIcon(type);
  }, [icon, type]);

  return icon;
};

export default useIcon;
