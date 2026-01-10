import Button from '@/components/Button';
import { RotateCcw, SlidersHorizontal, X } from 'lucide-react';

interface SettingsProps {
  isSettingsOpen: boolean;
  setIsSettingsOpen: (isSettingsOpen: boolean) => void;
}
function Settings({ isSettingsOpen, setIsSettingsOpen }: SettingsProps) {
  return (
    <div className="t flex items-center gap-4">
      <Button
        child={isSettingsOpen ? <X /> : <SlidersHorizontal />}
        handleClick={() => setIsSettingsOpen(!isSettingsOpen)}
      />
      <Button child={<RotateCcw />} handleClick={() => {}} />
    </div>
  );
}

export default Settings;
