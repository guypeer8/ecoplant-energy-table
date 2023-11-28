import React from 'react';
import ReactDOM from 'react-dom/client';

import EnergyTable from './components/EnergyTable';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <EnergyTable />
  </React.StrictMode>
);