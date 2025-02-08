import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { AuthProvider } from "react-oidc-context";
//
// const cognitoAuthConfig = {
//     authority: "https://cognito-idp.eu-north-1.amazonaws.com/eu-north-1_Gc8LXsCIh",
//     client_id: "48kcqu2d4kdjpqtleslhj2o615",
//     redirect_uri: "https://dypphfhuwkpe4.cloudfront.net",
//     response_type: "code",
//     scope: "phone openid email",
// };


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
