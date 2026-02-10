import React from 'react';
import { createRoot } from 'react-dom/client';
import AppRouter from './pages/AppRouter';

const root = createRoot(document.body);
root.render(<AppRouter />);