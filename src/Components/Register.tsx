/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useAuth } from "../Context/authContext";
import { Target } from "../Types";
import { useNavigate } from "react-router-dom";
import Alert from "./Alert";

export function Register () {
  const { signup } = useAuth()
  const navigate = useNavigate()

  const [error, seterror] = useState('')
  const [user, setuser] = useState({
    email: '',
    password: ''
  })

  const handleChange = ({ target: { name, value } }: Target) => {
    setuser({ ...user, [name]: value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    seterror('')
    try {
      await signup(user.email, user.password)
      navigate('/')
    } catch (e: any) {
      if (e.code === 'auth/internal-error') seterror('Invalid email')
      if (e.code === 'auth/weak-password') seterror('Password too weak')
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

        <button className="rounded-md bg-blue-500 hover:bg-blue-700 duration-200 focus:outline-none focus:shadow-outline px-2 py-1">Register</button>
      </form>
    </section>
  )
}
