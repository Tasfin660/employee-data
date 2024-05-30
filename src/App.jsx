import routes from '~react-pages';
import { useRoutes } from 'react-router-dom';
import { Suspense } from 'react';
import MainLayout from './components/layout/MainLayout';

export default function App() {
  return (
    <Suspense>
      <MainLayout>{useRoutes(routes)}</MainLayout>
    </Suspense>
  );
}
