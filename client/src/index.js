import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthContextProvider } from './context/AuthContext';
import reportWebVitals from './reportWebVitals';
import { DataContextProvider } from './context/DataContext';
import { LoaderContextProvider } from './context/LoaderContext';
import { PaymentContextProvider } from './context/PaymentContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <DataContextProvider>
        <LoaderContextProvider>
          <PaymentContextProvider>
            <App />
          </PaymentContextProvider>
        </LoaderContextProvider>
      </DataContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
