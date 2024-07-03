import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import { Paths } from './paths';
import { Main } from './pages/main/Main';

import './index.css';
import { Catalog } from './pages/catalog/Catalog';

const router = createBrowserRouter([
  {
    path: Paths.main,
    element: <Main />,
  },
  {
    path: Paths.catalog,
    element: <Catalog />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
