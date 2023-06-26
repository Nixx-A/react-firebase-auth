/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAuth } from "../Context/authContext"
import { ContextProps } from "../Types";


export function Home () {
  const { user, logout, loading }: ContextProps = useAuth()
  if (!user || !logout || loading) return <p>Error</p>
  const handleLogout = async () => {
    try {
      await logout()
    } catch (e: any) {
      console.error(e);

    }
  }
  if (loading) return <h1>Loading...</h1>

  return (
    <div className="text-black w-full max-w-md m-auto ">
      <div className="bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4">
        <p className="text-xl mb-4">Welcome {user.displayName || user.email}</p>
        <button className="bg-slate-200 hover:bg-slate-300 duration-100 rounded py-2 px-4 text-black" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  )
}
