import React, { setGlobal } from 'reactn';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase/app';
import 'firebase/firestore';
import registerServiceWorker from './registerServiceWorker';
import { FirestoreProvider } from 'react-firestore';


const root = document.getElementById('root');

setGlobal({
    auth: false,
    user: {
        email: '',
        firstName: '',
        lastName: '',
        profilePicURL: '',
        provider: '',
        token: ''
    }
});

const config = {
    apiKey: "AIzaSyAJgLg_WwqAsTrvCMCqq1ibBop_TnKeYZ0",
    authDomain: "fdgstriano-184221.firebaseapp.com",
    databaseURL: "https://fdgstriano-184221.firebaseio.com",
    projectId: "fdgstriano-184221",
    storageBucket: "fdgstriano-184221.appspot.com",
    messagingSenderId: "88843043712"
};


firebase.initializeApp(config);

ReactDOM.render(
    <FirestoreProvider firebase={firebase}>
        <App />
</FirestoreProvider>, root);
registerServiceWorker();


