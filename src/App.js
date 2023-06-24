import './App.css';
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import SignIn from './components/SignIn';
import ChatRoom from './components/ChatRoom';


firebase.initializeApp({
  apiKey: "AIzaSyC__l8QYnTHcyOZ3YbYUXldltNNps2cY5s",
  authDomain: "react-chat-app-fa429.firebaseapp.com",
  projectId: "react-chat-app-fa429",
  storageBucket: "react-chat-app-fa429.appspot.com",
  messagingSenderId: "865857450047",
  appId: "1:865857450047:web:cd0ab0bfc35fead325888a",
  measurementId: "G-XJ19ZL8XGE"
})


const auth = firebase.auth()
const firestore = firebase.firestore()


function App() {

  const [user] = useAuthState(auth);

  const SignInHandler = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
  }

  const messageHandler = () =>{
    
  }

  return (
    <div className="App">
      <header>

      </header>
      <section>
        {user ? <ChatRoom messages={messageHandler}/> : <SignIn handler={SignInHandler} />}
      </section>
    </div>
  );
}

export default App;
