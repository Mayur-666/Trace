import Header from '@/components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AlgorithmCatalog from './pages/AlgorithmCatalog';
import SampleAlgoPage from './pages/SampleAlgoPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<AlgorithmCatalog />} />
        <Route path="/sorting/:id" element={<SampleAlgoPage />} />
        <Route path="/searching/:id" element={<SampleAlgoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
