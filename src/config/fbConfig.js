import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
    apiKey: "AIzaSyDs6y8F8_0TpP9SLqOfBzaZNL44vgRRT3g",
    authDomain: "myresume-f93e5.firebaseapp.com",
    databaseURL: "https://myresume-f93e5.firebaseio.com",
    projectId: "myresume-f93e5",
    storageBucket: "myresume-f93e5.appspot.com",
    messagingSenderId: "536990355024"
  };

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
