import { Dog, Rabbit, Turtle } from 'lucide-react';
import Button from '@/components/Button';
import { useState } from 'react';

const SPEEDS = [
  { value: 'SLOW', icon: Turtle },
  { value: 'NORMAL', icon: Dog },
  { value: 'FAST', icon: Rabbit },
];

function Speed() {
  const [selected, setSelected] = useState(SPEEDS[1].value);

  return (
    <div className="t flex items-center gap-4">
      {SPEEDS.map(({ value, icon: Icon }) => (
        <Button
          key={value}
          child={<Icon />}
          handleClick={() => setSelected(value)}
          styles={selected === value ? 'bg-blue-400 text-black' : ''}
        />
      ))}
    </div>
  );
}

export default Speed;
