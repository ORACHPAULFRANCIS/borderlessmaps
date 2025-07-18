import React from 'react'; // Optional but good practice with JSX in TSX files
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const container = document.getElementById('root');
if (!container) {
  throw new Error('Root container missing in HTML');
}
const root = createRoot(container);
root.render(<App />);
