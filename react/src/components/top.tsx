import React from 'react';

interface PaletteProps {
  palette: any; // Replace 'any' with the appropriate type
  className?: string;
}

const Palette: React.FC<PaletteProps> = ({ palette, className }) => {
  return (
    <div className={className}>
      {/* Render palette details here */}

      <div>
        <h3>{palette.name}</h3>
        <div style={{ display: 'flex' }}>
          {palette.colors.map((color: string, index: number) => (
            <div
              key={index}
              style={{
                backgroundColor: color,
                width: '20px',
                height: '20px',
                margin: '0 5px',
              }}
            ></div>
          ))}
        </div>
      </div>
  );
};

export default Palette;
