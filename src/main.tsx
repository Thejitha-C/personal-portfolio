// Polyfill/safety wrapper for window.fetch assignment in strict mode/iframe proxies
try {
  if (typeof window !== 'undefined' && 'fetch' in window) {
    let _fetch = window.fetch;
    Object.defineProperty(window, 'fetch', {
      get() {
        return _fetch;
      },
      set(v) {
        _fetch = v;
      },
      configurable: true,
      enumerable: true,
    });
  }
} catch (e) {
  // Ignore error if property is non-configurable
}

import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

