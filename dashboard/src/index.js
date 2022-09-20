// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import { BrowserRouter } from 'react-router-dom';
// import { ContextProvider } from './contexts/ContextProvider'

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <ContextProvider>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </ContextProvider>
// );


import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import { ContextProvider } from './contexts/ContextProvider';

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
