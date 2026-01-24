import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { setQuery } from '@/slices/searchSlice';
import React from 'react';

interface GlobalSearchInputProps {
  inputRef: React.RefObject<HTMLInputElement | null>;
  active: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

function GlobalSearchInput({
  inputRef,
  active,
  setIsActive,
}: Readonly<GlobalSearchInputProps>) {
  const { query } = useAppSelector((state) => state.global_search);
  const dispatch = useAppDispatch();
  const timerRef = React.useRef<NodeJS.Timeout | null>(null);

  const onChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.currentTarget.value;

      // Clear previous timer
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }

      // Debounce dispatch to Redux
      timerRef.current = setTimeout(() => {
        dispatch(setQuery(value));
      }, 300);
    },
    [dispatch],
  );

  // Cleanup on unmount
  React.useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  return (
    <button
      onMouseDown={() => inputRef.current?.focus()}
      className={`
            flex items-center px-5 h-12 rounded-xl
            bg-transparent cursor-text
            transition-all duration-400 ease-in-out
            ${
              active
                ? 'w-140 shadow-xl ring-2 ring-gray-500'
                : 'w-105 shadow-sm ring-1 ring-gray-200'
            }
          `}
    >
      <input
        ref={inputRef}
        defaultValue={query}
        type="text"
        placeholder="Search algorithms..."
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}
        onChange={onChange}
        className="w-full h-12 bg-transparent outline-none text-sm text-white placeholder:text-gray-400"
      />
    </button>
  );
}

export default GlobalSearchInput;
