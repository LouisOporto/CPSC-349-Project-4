import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import pb from './lib/pocketbase';

const USERNAME = 'louisoporto@yahoo.com';
const PASSWORD = '1234567890';

const authData = await pb.admins.authWithPassword(USERNAME, PASSWORD);
console.log(authData);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
