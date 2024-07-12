import React, { useState } from 'react';

interface HueFilterProps {
  selectedHues: string[];
  setSelectedHues: (hues: string[]) => void;
}

const HueFilter: React.FC<HueFilterProps> = ({ selectedHues, setSelectedHues }) => {
  const hues = ['red', 'orange', 'yellow', 'green', 'aqua', 'blue', 'violet', 'fuchsia'];

  const toggleHue = (hue: string) => {
    const hueIndex = selectedHues.indexOf(hue);
    if (hueIndex === -1) {
      setSelectedHues([...selectedHues, hue]);
    } else {
      setSelectedHues(selectedHues.filter(selectedHue => selectedHue !== hue));
    }
  };

  return (
    <div>
      {hues.map(hue => (
        <button
          key={hue}
          onClick={() => toggleHue(hue)}
          style={{ backgroundColor: hue, margin: '5px', padding: '10px', color: 'white' }}
        >
          {hue}
        </button>
      ))}
    </div>
  );
};

export default HueFilter;
