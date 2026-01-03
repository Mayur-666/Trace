import { useEffect, useRef, useState } from 'react';

function GlobalSearch() {
  const [isActive, setIsActive] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Lock scroll
  useEffect(() => {
    document.body.style.overflow = isActive ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isActive]);

  // ESC key handler
  useEffect(() => {
    if (!isActive) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsActive(false);
        inputRef.current?.blur();
      }
    };

    globalThis.addEventListener('keydown', handleKeyDown);

    return () => {
      globalThis.removeEventListener('keydown', handleKeyDown);
    };
  }, [isActive]);

  return (
    <>
      {/* Backdrop */}
      <button
        className={`
          fixed inset-0 z-10 bg-black/60
          transition-opacity duration-200
          ${isActive ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
        onMouseDown={() => setIsActive(false)}
      />

      {/* Search Container */}
      <div className="relative z-20 w-full flex justify-center py-3 md:py-6">
        <button
          onMouseDown={() => inputRef.current?.focus()}
          className={`
            flex items-center px-5 h-12 rounded-xl
            bg-transparent cursor-text
            transition-all duration-400 ease-in-out
            ${
              isActive
                ? 'w-140 shadow-xl ring-2 ring-gray-500'
                : 'w-105 shadow-sm ring-1 ring-gray-200'
            }
          `}
        >
          <input
            ref={inputRef}
            type="text"
            placeholder="Search for any algo..."
            onFocus={() => setIsActive(true)}
            onBlur={() => setIsActive(false)}
            className="
              w-full h-12 bg-transparent outline-none
              text-sm text-white
              placeholder:text-gray-400
            "
          />
        </button>
      </div>
    </>
  );
}

export default GlobalSearch;
