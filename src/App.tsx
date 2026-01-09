import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '@/components/Header';
import AlgorithmCatalog from '@/pages/AlgorithmCatalog';
import AnimationPage from '@/pages/AnimationPage';
import NotFound from './components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<AlgorithmCatalog />} />
        <Route path="/:category/:id" element={<AnimationPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
