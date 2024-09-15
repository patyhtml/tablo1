import * as React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// fetch('http://localhost:3001')
// .then(response => response.text()
// )
// .then(response =>{

//   console.log(response)
// })






root.render(
  
    <App />
 
);
