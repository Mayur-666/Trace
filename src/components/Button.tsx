import { type ReactNode } from 'react';

interface ButtonProps {
  child: ReactNode;
  handleClick: () => void;
  styles?: string;
}
function Button({ child, handleClick, styles }: ButtonProps) {
  return (
    <button className={'t cursor-pointer px-2 ' + styles} onClick={handleClick}>
      {child}
    </button>
  );
}

export default Button;
