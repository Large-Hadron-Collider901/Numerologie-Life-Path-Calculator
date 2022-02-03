import React from 'react';
import ReactDOM from 'react-dom';
import {Auth0Provider} from '@auth0/auth0-react'
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
ReactDOM.render(
  <Auth0Provider
  domain="dev-l0day9ex.us.auth0.com"
  clientId="okNJH3ukJS1P69hsXUYAfwdRq3TKWAh4"
  redirectUri="http://localhost:3000/Register"
>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </Auth0Provider>,
  document.getElementById('root')
);

