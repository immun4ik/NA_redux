import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* оборачиваем весь App в провайдер -> из любой точки можно будет получить доступ к store */}
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
