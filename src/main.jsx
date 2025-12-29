import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from './redux/store';
import { ResumeProvider } from './context/ResumeContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ResumeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ResumeProvider>
  </Provider>
);
