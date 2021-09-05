import { EmptyLayout } from "../layouts/EmptyLayout"
import styled from "styled-components"
import Ads from "../components/Ads"
import { Typography } from "@material-ui/core"
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos"
import SongItem from "../components/item/SongItem"
import ListContainer from "../components/item/ListContainer"
import EventItem from "../components/item/EventItem"
import RankChart from "../components/RankChart"
import ArtistItem from "../components/item/ArtistItem"
import JustList from "../components/JustList"
import { SongContext } from "../contexts/SongContext"
import { useContext, useEffect } from "react"
import { useAppApiClient } from "../hooks/useAppApiClient"
import useAsync from "../hooks/useAsync"
import Radio from "../components/Radio"
import EventList from "../components/EventList"
import ArtistList from "../components/ArtistList"
import Mixtap from "../components/Mixtap"

const chartImg = "https://zjs.zadn.vn/zmp3-desktop/releases/v1.3.3/static/media/bg-chart.fd766403.jpg"

const Home = () => {
  const api = useAppApiClient()
  const { songs, setSongs } = useContext(SongContext)
  const getSongs = useAsync(async () => {
    const response = await api.getSongs()
    if (!response) return
    setSongs(response)
  })
  useEffect(() => {
    getSongs.run()
  }, [])
  return (
    <EmptyLayout>
      <Container>
        <Ads />
        <RecentlyContainer>
          <Title>
            <Typography>Recently</Typography>
            <ArrowForwardIosIcon />
          </Title>
          <ListContainer>
            {songs?.map((item, index) => (
              <SongItem song={item} key={index} />
            ))}
          </ListContainer>
        </RecentlyContainer>
        <Suggestions>
          <Title>
            <Typography>Suggestions</Typography>
          </Title>
          <ListContainer>
            {songs?.map((item, index) => (
              <SongItem song={item} key={index} />
            ))}
          </ListContainer>
        </Suggestions>
        <BestMusic>
          <Title>
            <Typography>Best Music</Typography>
          </Title>
          <ListContainer>
            {songs?.map((item, index) => (
              <SongItem song={item} key={index} />
            ))}
          </ListContainer>
        </BestMusic>
        <RadiContainer>
          <Title>
            <Typography>Radio Live </Typography>
          </Title>
          <Radio />
        </RadiContainer>
        <BestMixtape>
          <Title>
            <Typography>Best Mixtape</Typography>
          </Title>
          <Mixtap />
        </BestMixtape>
        <NewSong>
          <Title>
            <Typography>New Song</Typography>
          </Title>
          <ListContainer>
            {songs?.map((item, index) => (
              <SongItem song={item} key={index} />
            ))}
          </ListContainer>
        </NewSong>
        <Trending>
          <Title>
            <Typography>Trending</Typography>
          </Title>
          <ListContainer>
            {songs?.map((item, index) => (
              <SongItem song={item} key={index} />
            ))}
          </ListContainer>
        </Trending>
        <Event>
          <Title>
            <Typography>Events</Typography>
          </Title>
          <EventList />
        </Event>
        <SongChart>
          <RankChart />
        </SongChart>
        <Artists>
          <ArtistList />
        </Artists>
        <JustListCotainer>
          <Title>
            <Typography>Just List</Typography>
          </Title>
          <JustList />
        </JustListCotainer>
      </Container>
    </EmptyLayout>
  )
}

const JustListCotainer = styled.div`
  width: 90%;
  margin-left: 5%;
  @media only screen and (max-width: 768px) {
    width: 100%;
    margin-left: 0;
  }
`

const Artists = styled.div`
  margin: 2em 0;
  width: 90%;
  margin-left: 5%;
  @media only screen and (max-width: 768px) {
    width: 100%;
    margin-left: 0;
  }
`

const SongChart = styled.div`
  position: relative;
  margin: 1em 0;
  display: flex;
  width: 90%;
  margin-left: 5%;
  border-radius: 1em;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(45, 6, 77, 0.3));
  &:before {
    position: absolute;
    top: 0;
    content: "";
    width: 100%;
    height: 100%;
    border-radius: 1em;
    background-image: url(${chartImg});
    background-repeat: no-repeat;
    opacity: 0.05;
  }
`

const Event = styled.div`
  width: 90%;
  margin-left: 5%;
  @media only screen and (max-width: 768px) {
    width: 100%;
    margin-left: 0;
  }
`

const Trending = styled.div`
  width: 90%;
  margin-left: 5%;
  @media only screen and (max-width: 768px) {
    width: 100%;
    margin-left: 0;
  }
`

const NewSong = styled.div`
  width: 90%;
  margin-left: 5%;
  @media only screen and (max-width: 768px) {
    width: 100%;
    margin-left: 0;
  }
`

const BestMixtape = styled.div`
  width: 90%;
  margin-left: 5%;
  @media only screen and (max-width: 768px) {
    width: 100%;
    margin-left: 0;
  }
`

const RadiContainer = styled.div`
  width: 90%;
  margin-left: 5%;
  @media only screen and (max-width: 768px) {
    width: 100%;
    margin-left: 0;
  }
`

const BestMusic = styled.div`
  width: 90%;
  margin-left: 5%;
  @media only screen and (max-width: 768px) {
    width: 100%;
    margin-left: 0;
  }
`

const Suggestions = styled.div`
  width: 90%;
  margin-left: 5%;
  @media only screen and (max-width: 768px) {
    width: 100%;
    margin-left: 0;
  }
`

const Title = styled.div`
  display: flex;
  align-items: center;
  margin: 1em 0;
  color: #dadada;
  & P {
    font-family: "nunito";
    font-size: 1.3em;
    font-weight: 900;
  }
  @media only screen and (max-width: 768px) {
    margin-left: 1em;
  }
`

const RecentlyContainer = styled.div`
  width: 90%;
  margin-left: 5%;
  margin-top: 20em;
  @media only screen and (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    margin-top: 5em;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 18vw;
  width: 82vw;
  height: 87vh;
  @media only screen and (max-width: 1000px) {
    margin-left: 70px;
    width: 95vw;
  }
  @media only screen and (max-width: 768px) {
    width: 100vw;
    margin-left: 0;
  }
  overflow-x: hidden;
  overflow-y: scroll;
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #f5f5f5;
    display: none;
  }
  &::-webkit-scrollbar {
    width: 0.3vw;
    background-color: #f5f5f5;
    display: none;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #555;
    display: none;
  }
`

export default Home
