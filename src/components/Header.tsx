import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <nav className="t px-8 py-4">
      <button onClick={handleClick} className="cursor-pointer">
        Trace
      </button>
    </nav>
  );
}

export default Header;
