import { useEffect, useState } from 'react';

const useScrolledPercentage = () => {
  const [scrolledPercentage, setScrolledPercentage] = useState(null);

  useEffect(() => {
    const updatePosition = () => {
        let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
        let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let scrolled = (windowScroll / height) * 100;

        setScrolledPercentage(scrolled.toFixed(2));
    };

    window.addEventListener('scroll', updatePosition);

    updatePosition();

    return () => window.removeEventListener('scroll', updatePosition);
  }, []);

  return scrolledPercentage;
};

export default useScrolledPercentage