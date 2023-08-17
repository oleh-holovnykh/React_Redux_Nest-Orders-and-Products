import { Layout } from 'pages/Layout';
import { NotFoundPage } from 'pages/NotFoundPage';
import { Orders } from 'pages/Orders';
import { Products } from 'pages/Products';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: 'orders',
        element: <Orders />,
      },
      {
        path: 'products',
        element: <Products />,
      },
    ],
  },
]);
