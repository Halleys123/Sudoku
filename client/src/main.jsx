import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from '@/App.jsx';
import { ThemeProvider } from '@contexts/ThemeContext.jsx';

const app = (
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);

createRoot(document.getElementById('root')).render(
  import.meta.env.NODE_ENV === 'development' ? (
    <StrictMode>{app}</StrictMode>
  ) : (
    app
  )
);
