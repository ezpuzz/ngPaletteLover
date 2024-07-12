import React, { useEffect, useRef } from 'react';

interface ColorProps {
  color: {
    getWidth: () => string;
    getHex: () => string;
  };
}

const Color: React.FC<ColorProps> = ({ color }) => {
  const colorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (colorRef.current) {
      colorRef.current.style.width = color.getWidth();
      colorRef.current.style.backgroundColor = color.getHex();
    }
  }, [color]);

  return <div className="palette-color" ref={colorRef}></div>;
};

export default Color;
