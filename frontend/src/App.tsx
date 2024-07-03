import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import { Paths } from './paths';
import { Main } from './pages/main/Main';
import { Catalog } from './pages/catalog/Catalog';

import './index.css';

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
