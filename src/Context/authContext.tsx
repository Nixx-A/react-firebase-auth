/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";
import { Props } from "../Types";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase";

//idk how to solve the problem that useContext throws. The error says `Expected 1 argument, but received 0` I tried to fix it with interfaces but now it throws another error 
// const InitialState: AppState = {signup (email: string, password: string): void}

export const authContext = createContext()

export const useAuth = () => {
  const context = useContext(authContext)
  if (!context) throw new Error('There is not auth provider')
  return context
}

export function AuthProvider ({ children }: Props) {
  const [user, setUser] = useState<unknown | null>(null)
  const [loading, setLoading] = useState(true)

  const signup = async (email: string, password: string) => {
    await createUserWithEmailAndPassword(auth, email, password)
  }

  const login = (email: string, password: string) => signInWithEmailAndPassword(auth, email, password)

  const logout = () => signOut(auth)

  const loginWithGoogle = () => {
    const googleProider = new GoogleAuthProvider()
    return signInWithPopup(auth, googleProider)

  }

  const resetPassword = (email: string) => {
    sendPasswordResetEmail(auth, email)
  }


  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
      setLoading(false)

    })
    return () => unsuscribe()
  }, [])


  return (
    <authContext.Provider value={{ signup, login, user, logout, loading, loginWithGoogle, resetPassword }}>
      {children}
    </authContext.Provider>
  )
}