import { db } from '../firebase/config'

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut
} from 'firebase/auth'

import { useState, useEffect } from 'react'

export const useAuthentication = () => {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)

    // cleanup
    const auth = getAuth()

    const [cancelled, setCancelled] = useState(false)
    
    function checkIfIsCancelled(){
        if(cancelled){
            return
        }
    }

    // register
    const createUser = async (data) =>{
        checkIfIsCancelled()

        setLoading(true)
        setError(null)

        try {
            const {user} = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )

            await updateProfile(user, {
                displayName: data.displayName
            })

            setLoading(false)

            return user;

        } catch (error) {
            console.log(error.message)

            let systemErrorMessage

            if(error.message.includes("Password")){
                systemErrorMessage = "A senha precisa conter pelo menos 6 caracteres."
            }else if(error.message.includes("email-already")){
                systemErrorMessage = "E-mail já cadastrado."
            }else{
                systemErrorMessage = "Ocorreu um erro, por favor tente mais tarde."
            }

            setError(systemErrorMessage)
            setLoading(false)


        }
    }

    // logOut - sign out
    const logout = async () =>{
        checkIfIsCancelled()

        signOut(auth)
    }

    // logIn
    const login = async (data) =>{
        checkIfIsCancelled()

        setLoading(true)
        setError(null)
        
        try {
            await signInWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )
            setLoading(false)

        } catch (error) {
            let systemErrorMessage

            if (error.message.includes("invalid-credential")){
                systemErrorMessage = "Verifique a senha e o e-mail e tente novamente"
            }else if(error.message.includes("wrong-password")){
                systemErrorMessage = "Senha incorreta"
            }else{
                systemErrorMessage = "Ocorreu um erro, por favor tente mais tarde"
            }
            setError(systemErrorMessage)
            setLoading(false)
        }
    }

    useEffect(() => {
        return () => setCancelled(true)
    }, [])

  return {
    auth,
    createUser,
    error,
    loading,
    logout,
    login
  }
}