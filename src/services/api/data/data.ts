import { ChartType } from "../types/Chart"
import { Song } from "../types/Song"
import thithoi from "../../../sound/thithoi.mp3"
import chodumaivesau from "../../../sound/chodumaivesau.mp3"
import chungtacuahientai from "../../../sound/chungtacuahientai.mp3"
import emconghe from "../../../sound/emconghe.mp3"
import kemongmo from "../../../sound/kemongmo.mp3"
import loiyeungaydai from "../../../sound/loiyeungaydai.mp3"
import nangtho from "../../../sound/nangtho.mp3"
import xedap from "../../../sound/xedap.mp3"
import { Live } from "../types/Live"
import { Mixtape } from "../types/MIxtape"
import { Event } from "../types/Event"
import { Artist } from "../types/Artise"

export const artist: Artist[] = [
  {
    image: "https://zmp3-static.zadn.vn/skins/zmp3-v6.1/images/artists/v2/chi-dan.png",
    name: "Chi Dân  ",
  },
  {
    image: "https://zmp3-static.zadn.vn/skins/zmp3-v6.1/images/artists/v2/duc-phuc.png",
    name: "ĐứcPhúc",
  },
  {
    image: "https://zmp3-static.zadn.vn/skins/zmp3-v6.1/images/artists/v2/erik.png",
    name: "Erik",
  },
  {
    image: "	https://zmp3-static.zadn.vn/skins/zmp3-v6.1/images/artists/v2/hoa-minzy.png",
    name: "Hòa Minzy",
  },
]

export const event: Event[] = [
  {
    interact: 500,
    type: "event",
    image: "https://image.freepik.com/free-vector/music-event-poster-template-with-abstract-shapes_1361-1316.jpg",
    title: "Music Show",
    date: new Date("2021-12-17").toLocaleDateString("en-US", { timeZone: "America/New_York" }),
  },
  {
    interact: 430,
    type: "event",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC-bqLTCPtw8yaZl8dlmm0JU7u19yJcpkRs7jXQgjHN8Iof4tNwuzcAHIDrcAAEHLZj7E&usqp=CAU",
    title: "Music Show",
    date: new Date("2021-10-1").toLocaleDateString("en-US", { timeZone: "America/New_York" }),
  },
  {
    interact: 500,
    type: "event",
    image: "https://image.freepik.com/free-vector/modern-music-event-poster-template_1361-1292.jpg",
    title: "Music Show",
    date: new Date("2021-25-9").toLocaleDateString("en-US", { timeZone: "America/New_York" }),
  },
]

export const radioLive: Live[] = [
  {
    Title: "Music Live",
    image: "https://intietkiem.com/wp-content/uploads/2019/07/dia-chi-uy-tin-de-thiet-ke-va-in-an-poster.jpg",
    member: 500,
    avatar: "https://yt3.ggpht.com/ytc/AKedOLQUTCVb5f5qA8l-tqhkkOI_I4zJQ2Wu-6wTUyJTYg=s900-c-k-c0x00ffffff-no-rj",
  },
  {
    Title: "Music Live",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3RAvZfGAls_BG7bnTHM7q-geMjL4DWCw0WA&usqp=CAU",
    member: 301,
    avatar: "https://zmp3-photo-fbcrawler.zadn.vn/avatars/a/8/1/6/a816e6868d12e65ae1eb63ddf80a9f45.jpg",
  },
  {
    Title: "Music Live",
    image:
      "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/128390350/original/3d2f6f6a80fe02fed5424479ad716cd04f4fe603/design-creative-poster-for-your-event-band-show-etc.jpg",
    member: 401,
    avatar: "https://avatar-ex-swe.nixcdn.com/singer/avatar/2019/09/19/1/e/f/8/1568871085871_600.jpg",
  },
]

export const mixtape: Mixtape[] = [
  {
    author: ["Sơn tùng M-TP", "Reddy"],
    image:
      "https://1.bp.blogspot.com/-mKCgbfv27XA/Xqv3120LdiI/AAAAAAAAc50/DclD6qRRS9sGB3yEwk2Q3MyfMwgboQwZQCLcBGAsYHQ/s640/mix-tape-la-gi.jpg",
    name: "July Mixtape",
  },
  {
    author: ["Sơn tùng M-TP", "Reddy"],
    image: "https://tbtvn.org/wp-content/uploads/2018/08/mixtape-la-gi-300x157.jpg",
    name: "Jun Mixtape",
  },
  {
    author: ["Sơn tùng M-TP", "Reddy"],
    image: "https://image.shutterstock.com/image-vector/cassette-tape-retro-vintage-mixtape-260nw-1210959829.jpg",
    name: "May Mixtape",
  },
  {
    author: ["Sơn tùng M-TP", "Reddy"],
    image:
      "https://thumbs.dreamstime.com/b/vintage-vector-illustration-retro-audio-cassette-mixtape-emblem-i-have-you-handwritten-phrase-poster-template-177579651.jpg",
    name: "October Mixtape",
  },
]

export const defaultSong: Song = {
  author: "Hoàng dũng",
  image: "https://i.ytimg.com/vi/Zzn9-ATB9aU/maxresdefault.jpg",
  name: "Nàng thơ",
  song: nangtho,
}

export const data: Song[] = [
  {
    author: "Charles",
    image: "https://i.ytimg.com/vi/3v3YYpVrEuA/maxresdefault.jpg",
    name: "Xe đạp",
    song: xedap,
  },
  {
    author: "Reddy",
    image: "https://i.ytimg.com/vi/Eb8fj-jstNo/maxresdefault.jpg",
    name: "Thì thôi",
    song: thithoi,
  },
  {
    author: "Sơn tùng M-TP",
    image: "https://media.vov.vn/sites/default/files/styles/large/public/2021-02/chungtacuahientai.jpg",
    name: "Chúng ta của hiện tại",
    song: chungtacuahientai,
  },
  {
    author: "buitruonglinh",
    image: "https://i.ytimg.com/vi/SGlBQR-ftVI/maxresdefault.jpg",
    name: "Cho dù mai về sau",
    song: chodumaivesau,
  },
  {
    author: "Reddy",
    image: "https://i.ytimg.com/vi/d9mX3nDAbf0/maxresdefault.jpg",
    name: "Em có nghe",
    song: emconghe,
  },
  {
    author: "Hoàng dũng",
    image: "https://i.ytimg.com/vi/Zzn9-ATB9aU/maxresdefault.jpg",
    name: "Nàng thơ",
    song: nangtho,
  },
  {
    author: "Reddy",
    image: "https://i.ytimg.com/vi/5A-dqn8aHGQ/maxresdefault.jpg",
    name: "Kẻ mộng mơ",
    song: kemongmo,
  },
  {
    author: "Kha",
    image: "https://i.ytimg.com/vi/UBv-GcD3jHE/maxresdefault.jpg",
    name: "Lời yêu ngây dại ",
    song: loiyeungaydai,
  },
]
export const top: ChartType[] = [
  { name: "Song", uv: 400, pv: 1600, amt: 2400 },
  { name: "Song", uv: 300, pv: 1600, amt: 2400 },
  { name: "Song", uv: 350, pv: 1600, amt: 2400 },
  { name: "Song", uv: 250, pv: 1600, amt: 2400 },
  { name: "Song", uv: 140, pv: 1600, amt: 2400 },
  { name: "Song", uv: 230, pv: 1600, amt: 2400 },
  { name: "Song", uv: 210, pv: 1600, amt: 2400 },
  { name: "Song", uv: 220, pv: 1600, amt: 2400 },
  { name: "Song", uv: 234, pv: 1600, amt: 2400 },
  { name: "Song", uv: 234, pv: 1600, amt: 2400 },
  { name: "Song", uv: 280, pv: 1600, amt: 2400 },
  { name: "Song", uv: 300, pv: 1600, amt: 2400 },
  { name: "Song", uv: 350, pv: 1600, amt: 2400 },
]

export const second: ChartType[] = [
  { name: "Song", uv: 350, pv: 1600, amt: 2400 },
  { name: "Song", uv: 270, pv: 1600, amt: 2400 },
  { name: "Song", uv: 350, pv: 1600, amt: 2400 },
  { name: "Song", uv: 220, pv: 1600, amt: 2400 },
  { name: "Song", uv: 410, pv: 1600, amt: 2400 },
  { name: "Song", uv: 380, pv: 1600, amt: 2400 },
  { name: "Song", uv: 300, pv: 1600, amt: 2400 },
  { name: "Song", uv: 240, pv: 1600, amt: 2400 },
  { name: "Song", uv: 200, pv: 1600, amt: 2400 },
  { name: "Song", uv: 210, pv: 1600, amt: 2400 },
  { name: "Song", uv: 200, pv: 1600, amt: 2400 },
  { name: "Song", uv: 220, pv: 1600, amt: 2400 },
  { name: "Song", uv: 340, pv: 1600, amt: 2400 },
]

export const third: ChartType[] = [
  { name: "Song", uv: 300, pv: 1600, amt: 2400 },
  { name: "Song", uv: 100, pv: 1600, amt: 2400 },
  { name: "Song", uv: 150, pv: 1600, amt: 2400 },
  { name: "Song", uv: 170, pv: 1600, amt: 2400 },
  { name: "Song", uv: 200, pv: 1600, amt: 2400 },
  { name: "Song", uv: 170, pv: 1600, amt: 2400 },
  { name: "Song", uv: 240, pv: 1600, amt: 2400 },
  { name: "Song", uv: 270, pv: 1600, amt: 2400 },
  { name: "Song", uv: 280, pv: 1600, amt: 2400 },
  { name: "Song", uv: 150, pv: 1600, amt: 2400 },
  { name: "Song", uv: 290, pv: 1600, amt: 2400 },
  { name: "Song", uv: 300, pv: 1600, amt: 2400 },
  { name: "Song", uv: 310, pv: 1600, amt: 2400 },
]
