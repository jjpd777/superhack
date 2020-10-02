import app from 'firebase/app';
import 'firebase/auth';


  var config = {
apiKey: "AIzaSyDXCQrmUjq-Whya-_1ImzEYv4UHYkaRLkY",
authDomain: "suuperhack-777.firebaseapp.com",
databaseURL: "https://suuperhack-777.firebaseio.com",
projectId: "suuperhack-777",
storageBucket: "suuperhack-777.appspot.com",
messagingSenderId: "982482990578",
appId: "1:982482990578:web:923b5bcb442c6c20a3676b",
measurementId: "G-Z2QG9LYTWL"
};

class Firebase {
    constructor() {
      app.initializeApp(config);
      this.auth = app.auth();
    }
    doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);
    doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);
    doSignOut = () => this.auth.signOut();

}

   
  export default Firebase;

