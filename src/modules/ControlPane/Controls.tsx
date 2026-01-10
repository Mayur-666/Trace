import { Pause, Play, SkipBack, SkipForward } from 'lucide-react';
import { useState } from 'react';
import Button from '@/components/Button';

function Controls() {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  return (
    <div className="t flex items-center gap-4">
      <Button child={<SkipBack />} handleClick={() => {}} />
      <Button
        child={isPlaying ? <Pause /> : <Play />}
        handleClick={() => setIsPlaying(!isPlaying)}
      />
      <Button child={<SkipForward />} handleClick={() => {}} />
    </div>
  );
}

export default Controls;
