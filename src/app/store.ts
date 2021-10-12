import { configureStore } from "@reduxjs/toolkit"
import { songSlice } from "../features/song/song"

const store = configureStore({
  reducer: {
    song: songSlice.reducer,
  },
})

type RootState = ReturnType<typeof store.getState>

export const songsSelector = (state: RootState) => state.song.songs
export const currentSongsSelector = (state: RootState) => state.song.currentSong

export default store
