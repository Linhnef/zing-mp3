import { AxiosInstance } from "axios"
import { artist, data, event, mixtape, second, third, top } from "./data/data"
import { radioLive } from "./data/data"
import { Artist } from "./types/Artise"
import { Event } from "./types/Event"
import { Live } from "./types/Live"
import { Mixtape } from "./types/MIxtape"
import { Rank } from "./types/Rank"
import { Song } from "./types/Song"

export const createAppApiClient = (api: AxiosInstance) => {
  return {
    getSongs: getSongs(api),
    getRank: getRank(api),
    getLive: getLive(api),
    getMixtape: getMixtape(api),
    getEvent: getEvent(api),
    getArtist: getArtist(api),
  }
}

const getSongs = (api: AxiosInstance) => async (): Promise<Song[] | null | undefined> => {
  try {
    const response = data
    return response
  } catch (error) {}
}

const getRank = (api: AxiosInstance) => async (): Promise<Rank[] | null | undefined> => {
  try {
    const tmp: Rank[] = []
    tmp.push({ song: data[0], chart: top })
    tmp.push({ song: data[1], chart: second })
    tmp.push({ song: data[2], chart: third })
    return tmp
  } catch (error) {}
}

const getLive = (api: AxiosInstance) => async (): Promise<Live[] | null | undefined> => {
  try {
    const response = radioLive
    return response
  } catch (error) {}
}

const getMixtape = (api: AxiosInstance) => async (): Promise<Mixtape[] | null | undefined> => {
  try {
    const response = mixtape
    return response
  } catch (error) {}
}

const getEvent = (api: AxiosInstance) => async (): Promise<Event[] | null | undefined> => {
  try {
    const response = event
    return response
  } catch (error) {}
}

const getArtist = (api: AxiosInstance) => async (): Promise<Artist[] | null | undefined> => {
  try {
    const response = artist
    return response
  } catch (error) {}
}
