import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setQuery } from '@/slices/searchSlice';
import GlobalResult from '@/modules/GlobalSearch/GlobalResult';
import GlobalSearchInput from './GlobalSearchInput';

function GlobalSearch() {
  const [isActive, setIsActive] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // Lock scroll
  useEffect(() => {
    document.body.style.overflow = isActive ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isActive]);

  // ESC key
  useEffect(() => {
    if (!isActive) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsActive(false);
        inputRef.current?.blur();
      }
    };

    globalThis.addEventListener('keydown', handleKeyDown);
    return () => globalThis.removeEventListener('keydown', handleKeyDown);
  }, [isActive]);

  const handleSelect = (route: string) => {
    setIsActive(false);
    setQuery('');
    navigate(route);
  };

  return (
    <>
      {/* Backdrop */}
      <button
        className={`fixed inset-0 z-10 bg-black/60 transition-opacity
          ${isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        `}
        onMouseDown={() => setIsActive(false)}
      />

      {/* Search */}
      <div className="relative z-20 w-full flex justify-center py-4">
        {/* <div className="relative w-140"> */}
        <GlobalSearchInput
          inputRef={inputRef}
          active={isActive}
          setIsActive={setIsActive}
        />

        {/* Results */}
        {isActive && <GlobalResult handleSelect={handleSelect} />}
        {/* </div> */}
      </div>
    </>
  );
}

export default GlobalSearch;
