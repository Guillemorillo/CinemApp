// Initialize Firebase
import firebase from 'firebase'

let config = {
  apiKey: 'apiKey',
  databaseURL: 'https://cinemapp-e5321.firebaseio.com',
  authDomain: 'cinemapp-e5321.firebaseapp.com',
  storageBucket: 'gs://cinemapp-e5321.appspot.com'
}

let firebaseApp

if (firebase.apps.length === 0) {
  firebaseApp = firebase.initializeApp(config)
} else {
  firebaseApp = firebase.apps[0]
}

export default firebaseApp
