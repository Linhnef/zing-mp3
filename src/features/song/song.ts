import { createSlice } from "@reduxjs/toolkit"
import { Song } from "../../services/api/types/Song"

interface State {
  currentSong: Song | null
  songs: Song[] | null
}

export const defaultSongState: State = {
  currentSong: null,
  songs: null,
}
export const songSlice = createSlice({
  name: "song",
  initialState: defaultSongState,
  reducers: {
    setSongs(state, action) {
      state.songs = action.payload
    },
  },
})

export const { setSongs } = songSlice.actions
