/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useAuth } from "../Context/authContext";
import { ContextProps, Target } from "../Types";
import { Link, useNavigate } from "react-router-dom";
import Alert from "./Alert";

export function Login () {
  const { login, loginWithGoogle, resetPassword }: ContextProps = useAuth()
  const navigate = useNavigate()

  const [error, seterror] = useState('')
  const [user, setuser] = useState({
    email: '',
    password: ''
  })

  if (!login || !loginWithGoogle || !resetPassword) return <p>Internal error</p>
  const handleChange = ({ target: { name, value } }: Target) => {
    setuser({ ...user, [name]: value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    seterror('')
    try {
      await login(user.email, user.password)
      navigate('/')
    } catch (e: any) {
      seterror(e.message)
    }
  }


  const handleGoogleSignin = async () => {
    try {
      await loginWithGoogle()
      navigate('/')
    } catch (e: any) {
      seterror(e.message)
    }
  }

  const handleResetPassword = async () => {
    if (!user.email) return seterror('Please enter your email')
    try {
      await resetPassword(user.email)
      seterror('We sent you an email with the link to reset your password')
    } catch (e: any) {
      throw new Error(e)
    }
  }



  return (
    <section className="w-full max-w-xs m-auto">
      {error && <Alert message={error} />}
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-2" onSubmit={handleSubmit}>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
          <input className="shadow appearance-none border dounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-none" type="email" onChange={handleChange} name="email" placeholder="youremail@company.ltd" />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
          <input className="shadow appearance-none border dounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-none" type="password" onChange={handleChange} name="password" id="password" placeholder="******" />
        </div>
        <div className="flex items-center justify-between">
          <button className="rounded-md bg-blue-500 hover:bg-blue-700 duration-200 focus:outline-none focus:shadow-outline px-2 py-1">Login</button>
          <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#" onClick={handleResetPassword}>Forgot Password?</a>
        </div>
      </form>

      <p className="text-small text-black flex justify-between">Don't have an account?<Link className="font-semibold" to={'/register'}>Register</Link></p>

      <button className="text-black bg-slate-50 hover:bg-slate-200 duration-200 shadow-md rounded  border-2 border-gray-300 py-2 px-4 w-full" onClick={handleGoogleSignin}>Login with Google</button>
    </section>
  )
}
