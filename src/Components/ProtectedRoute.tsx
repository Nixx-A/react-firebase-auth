import { Navigate } from "react-router-dom"
import { useAuth } from "../Context/authContext"
import { ChildrenProp, ContextProps } from "../Types"

export function ProtectedRoute ({ children }: ChildrenProp) {
  const { user, loading }: ContextProps = useAuth()

  if (loading) return <h1>Loading...</h1>
  if (!user) return <Navigate to={'/login'} />

  return <>{children}</>
}
