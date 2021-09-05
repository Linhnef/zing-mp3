import { useState } from "react"
import { createContext, ReactNode } from "react"

interface ThemeProps {
  isZoom: boolean
  setIsZoom: (data: boolean) => void
}

export const ThemeContext = createContext<ThemeProps>({
  isZoom: false,
  setIsZoom: (data: boolean) => {},
})

interface ThemeProvicerProps {
  children: ReactNode
}

export const ThemeProvider = (props: ThemeProvicerProps) => {
  const [isZoom, setIsZoom] = useState(false)
  document.title = "zingmp3"
  const contextValue: ThemeProps = {
    isZoom,
    setIsZoom,
  }
  return <ThemeContext.Provider value={contextValue}>{props.children}</ThemeContext.Provider>
}
