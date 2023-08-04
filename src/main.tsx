import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import ErrorPage from './pages/ErrorPage';
import GroupPage from './pages/GroupPage/GroupPage';
import IntroducePage from './pages/GroupPage/IntroducePage';
import MailPage from './pages/GroupPage/MailPage';
import MailDetailPage from './pages/GroupPage/MailDetailPage';
import GroupPageTemplate from './components/GroupPage/GroupPageTemplate';

const router = createBrowserRouter([
  {
    path: '/',
    element: <GroupPageTemplate />,
    children: [
      {
        path: '',
        element: <GroupPage />,
      },
      {
        path: 'introduce',
        element: <IntroducePage />,
      },
      {
        path: 'mail',
        element: <MailPage />,
      },
      {
        path: 'mail/:id',
        element: <MailDetailPage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
