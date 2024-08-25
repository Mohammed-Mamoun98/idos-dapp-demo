import { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '@/layout';
import { Home } from './routes';

export default function AppRouter() {
  return (
    <Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="*" element={<>404</>} />
          </Route>
        </Routes>
      </Router>
    </Suspense>
  );
}
