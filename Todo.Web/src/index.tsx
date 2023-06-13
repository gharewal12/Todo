import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'atropos/css'
import './css/custom.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloProvider } from '@apollo/client';
import client from './graphql/client';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <BrowserRouter basename="/Todo">
        <React.StrictMode>
            <ApolloProvider client={client}>
                <App />
            </ApolloProvider>
        </React.StrictMode>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
