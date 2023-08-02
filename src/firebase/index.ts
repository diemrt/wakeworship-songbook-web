import { initializeApp } from "firebase/app";
import { 
  User,
  getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut
} from "firebase/auth"

const config = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
}

const app = initializeApp(config);
export const auth = getAuth(app)

export const FirebaseErrorMessagesIt = {
  'auth/too-many-requests': "L'accesso a questo account è stato temporaneamente disabilitato a causa di troppi tentativi falliti di login. Puoi ripristinarlo immediatamente reimpostando la password o puoi provare nuovamente più tardi.",
  'auth/wrong-password': "La password inserita non è valida.",
  'auth/user-not-found': "Non è stato trovato nessun utente associato a questa email."
}

export const signIn = (email: string, password: string) => { 
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user
        resolve(user)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export const getCurrentUser = () => {
  return new Promise<User>((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(auth, userAuth => {
      unsubscribe()
      resolve(userAuth!)
    }, reject)
  })
}

export const sendResetPwEmail = (email: string) => {
  return new Promise((resolve, reject) => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        resolve("Email inviata")
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export const userSignOut = () => signOut(auth)
