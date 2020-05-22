import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import { ToastProvider } from 'react-toast-notifications';
import HttpsRedirect from 'react-https-redirect';
import { AppRoutes } from './routes.js';
import CodeContextContainer from './contexts/code_context_container';
import './style.css';

function App() {
  return (
    <HttpsRedirect>
      <ToastProvider>
        <CodeContextContainer>
          <Router>
            <AppRoutes />
          </Router>
        </CodeContextContainer>
      </ToastProvider>
    </HttpsRedirect>
  );
}

export default App;
