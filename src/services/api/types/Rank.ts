import { ChartType } from "./Chart"
import { Song } from "./Song"

export interface Rank {
  song: Song
  chart: ChartType[]
}
