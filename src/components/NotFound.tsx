import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="t w-full h-[92vh] flex flex-col gap-2 items-center justify-center">
      <h1 className="text-4xl font-black">404</h1>
      <h2 className="text-2xl">Not Found</h2>
      <button
        onClick={() => navigate('/')}
        className="cursor-pointer border px-16 py-3"
      >
        Home
      </button>
    </div>
  );
}

export default NotFound;
