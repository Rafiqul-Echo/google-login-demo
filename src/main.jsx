import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {GoogleOAuthProvider} from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById('root')).render(
    <GoogleOAuthProvider clientId={'562485898061-sfvut51jmt3rvgv21f7nmg97vbgl3v8a.apps.googleusercontent.com'}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </GoogleOAuthProvider>
)
