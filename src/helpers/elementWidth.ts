import React, { useState, useRef, useEffect } from 'react';

const elementWidth = (): {
  width: number;
  ref: React.MutableRefObject<any>;
} => {
  const [width, setWidth] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (ref.current !== null) {
        setWidth(ref.current.clientWidth);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [ref.current]);

  return {
    width,
    ref,
  };
};

export default elementWidth;
