import { createContext, ReactNode } from "react"

interface AuthenticationProps {}

export const AuthenticationContext = createContext<AuthenticationProps>({})

interface AuthenticationProviderProps {
  children: ReactNode
}

export const AuthenticationProvider = (props: AuthenticationProviderProps) => {
  const contextValue: AuthenticationProps = {}
  return <AuthenticationContext.Provider value={contextValue}>{props.children}</AuthenticationContext.Provider>
}
