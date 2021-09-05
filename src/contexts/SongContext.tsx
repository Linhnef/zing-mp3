import { useState } from "react"
import { createContext, ReactNode } from "react"
import { Song } from "../services/api/types/Song"

interface SongProps {
  currentSong: Song | null
  setCurrentSong: (data: Song) => void
  songs: Song[] | null
  setSongs: (data: Song[]) => void
}

export const SongContext = createContext<SongProps>({
  currentSong: null,
  setCurrentSong: (data: Song) => {},
  songs: null,
  setSongs: (data: Song[]) => {},
})

interface SongProviderProps {
  children: ReactNode
}

export const SongProvider = (props: SongProviderProps) => {
  const [currentSong, setCurrentSong] = useState<Song | null>(null)
  const [songs, setSongs] = useState<Song[] | null>(null)
  const contextValue: SongProps = {
    currentSong,
    setCurrentSong,
    songs,
    setSongs,
  }
  return <SongContext.Provider value={contextValue}>{props.children}</SongContext.Provider>
}
