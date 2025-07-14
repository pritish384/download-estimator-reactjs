/**
 * Entry point for the React application.
 * 
 * - Imports React and ReactDOM for rendering the app.
 * - Imports the main App component.
 * - Creates a root DOM node using React 18's `createRoot`.
 * - Renders the App component wrapped in React.StrictMode for highlighting potential problems.
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


