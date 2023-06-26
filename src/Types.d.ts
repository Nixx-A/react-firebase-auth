export interface HandleChangeProps {
  name: string
  value: string
}

export interface Target {
  target: HandleChangeProps
}

export interface signupProps {
  email: string
  password: string
}

export interface ChildrenProp {
  children: React.ReactNode
}

export interface AppState {
  signup (email: string, password: string): void
  
}

export interface User {
  displayName: string
  email: string | null
}

export interface ContextProps {
  signup?: (email: string, password: string) => Promise<void>
  login?: (email: string, password: string) => Promise<unknown>
  user?: User | unknown
  logout?: () => Promise<void>
  loading?: boolean
  loginWithGoogle?: () => Promise<unknown>
  resetPassword?: (email: string) => void
}