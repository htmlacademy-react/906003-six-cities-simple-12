import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const Options = {
  OffersCount: 6,
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App offersCount = {Options.OffersCount} />
  </React.StrictMode>,
);
