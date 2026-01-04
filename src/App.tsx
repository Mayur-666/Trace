import Header from '@/components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AlgorithmCatalog from './pages/AlgorithmCatalog';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<AlgorithmCatalog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
