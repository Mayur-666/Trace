import { useState, type ChangeEvent } from 'react';

function ProgressBar() {
  const [value, setValue] = useState(5);
  const max = 10;
  const percentage = (value / max) * 100;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(parseInt(e.target.value));
  };

  return (
    <div className="w-full flex items-center gap-2">
      <p className="w-12 text-right">
        {value}/{max}
      </p>

      <input
        type="range"
        min={0}
        max={max}
        value={value}
        onChange={handleChange}
        className="w-full h-2 rounded-full appearance-none cursor-pointer"
        style={{
          background: `linear-gradient(
            to right,
            #2563eb ${percentage}%,
            #e5e7eb ${percentage}%
          )`,
        }}
      />
    </div>
  );
}

export default ProgressBar;
