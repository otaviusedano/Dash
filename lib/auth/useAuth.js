'use client'

import { signIn, signOut } from "next-auth/react"
import { useState } from "react"

function useAuth() {
	const [ userInfo, setUserInfo ] = useState({email: '', password: ''})
	const [ secondPassword, setSecondPassword ] = useState('')

	const [ displayMessageOf, setDisplayMessageOf ] = useState({email: '', password: ''})

	const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
	const passwordRegex = /.{8}$/

	const isEmailValid = userInfo.email.match(emailRegex)
	const isPasswordValid = userInfo.password.match(passwordRegex)

	const login = async (e) => {
		setDisplayMessageOf(null)
		e.preventDefault()

		if (!isEmailValid) {
			setDisplayMessageOf({email: 'Email not valid. Try again.'})
		}

		if (!isPasswordValid) {
			setDisplayMessageOf(prevState => ({...prevState, password: 'Password not valid. Try again.'}))
			return
		}

		await signIn('credentials', {
			email: userInfo.email,
			password: userInfo.password,
			redirect: true,
			callbackUrl: "/"
		})
	}

	const isConfirmPassword = () => {
		if (userInfo.password !== secondPassword) {
			return false
		}
		return true	
	}

  const logout = () => {
    signOut({redirect: true, callbackUrl: "/login"})
  }

  return {
    login,
    logout,
		setUserInfo,
		setSecondPassword,
		isConfirmPassword,
		displayMessageOf,
  }
}

export default useAuth;
