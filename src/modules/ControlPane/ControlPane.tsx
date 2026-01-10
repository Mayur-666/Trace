import AlgorithmInputBox from '@/components/AlgorithmInputBox';
import Controls from '@/modules/ControlPane/Controls';
import ProgressBar from '@/modules/ControlPane/ProgressBar';
import Settings from '@/modules/ControlPane/Settings';
import Speed from '@/modules/ControlPane/Speed';
import { useState } from 'react';

function ControlPane() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  return (
    <div className="relative px-8 py-4 w-full flex items-center gap-8">
      <Controls />
      <ProgressBar />
      <Speed />
      <Settings
        setIsSettingsOpen={setIsSettingsOpen}
        isSettingsOpen={isSettingsOpen}
      />
      {isSettingsOpen && <AlgorithmInputBox />}
    </div>
  );
}

export default ControlPane;
