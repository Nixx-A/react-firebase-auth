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

export interface Props {
  children: React.ReactNode
}

export interface AppState {
  signup (email: string, password: string): void
  
}
