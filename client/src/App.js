import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Detail } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/v1/jobs/" element={<Home />} />
        <Route path="/v1/jobs/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
