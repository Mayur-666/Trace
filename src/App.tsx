import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '@/components/Header';
import AlgorithmCatalog from '@/pages/AlgorithmCatalog';
import AnimationPage from '@/pages/AnimationPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<AlgorithmCatalog />} />
        <Route path="/sorting/:id" element={<AnimationPage />} />
        <Route path="/searching/:id" element={<AnimationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
