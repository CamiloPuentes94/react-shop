// Se importa react
import React from 'react';
import  ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client'
// Se importa el componente de react
import App from './routes/App';


createRoot(document.getElementById('app')).render(<App />)