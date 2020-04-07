import firebase from "firebase/app"
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyABwCUm0raFm_8gP-Tl-MWWFXD_PB-N-Pk",
  authDomain: "gym-app-1a537.firebaseapp.com",
  databaseURL: "https://gym-app-1a537.firebaseio.com",
  projectId: "gym-app-1a537",
  storageBucket: "gym-app-1a537.appspot.com",
  messagingSenderId: "515630351785",
  appId: "1:515630351785:web:b427f9607ef82eafd770b8",
  measurementId: "G-6FV55JD0L3"
};

firebase.initializeApp(firebaseConfig)
firebaseConfig.firestore().settings({timestampsInSnapshots: true})

export default firebase