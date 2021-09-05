import { Avatar, IconButton, ListItemText, Typography } from "@material-ui/core"
import styled from "styled-components"
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import Slider from "@material-ui/core/Slider"
import MusicVideoIcon from "@material-ui/icons/MusicVideo"
import MicIcon from "@material-ui/icons/Mic"
import QueueMusicIcon from "@material-ui/icons/QueueMusic"
import SoundTimeControl from "./SoundTimeControl"
import { useContext } from "react"
import { SongContext } from "../contexts/SongContext"
import { defaultSong } from "../services/api/data/data"
import { useText } from "../hooks/useText"

function Footer() {
  const { currentSong } = useContext(SongContext)
  return (
    <Container>
      <Song>
        <SongAvatar src={currentSong ? currentSong.image : defaultSong.image} />
        <ListItemText>
          <Typography variant="h6">
            {useText({ duration: currentSong ? currentSong.name : defaultSong.name, speed: 400 }).text}
          </Typography>
          <Typography>{currentSong ? currentSong.author : defaultSong.author}</Typography>
        </ListItemText>
        <SongButton>
          <FavoriteBorderIcon />
        </SongButton>
        <SongButton>
          <MoreVertIcon />
        </SongButton>
      </Song>
      <SoundTimeControl song={currentSong ? currentSong.song : defaultSong.song} />
      <MoreService>
        <IconButton>
          <MusicVideoIcon />
        </IconButton>
        <IconButton>
          <MicIcon />
        </IconButton>
        <VolumSlider />
        <IconButton>
          <QueueMusicIcon />
        </IconButton>
      </MoreService>
    </Container>
  )
}

const SongButton = styled(IconButton)`
  &.MuiIconButton-root {
    @media only screen and (max-width: 1000em) {
      visibility: hidden;
      & svg {
        visibility: hidden;
      }
    }
  }
`

const VolumSlider = styled(Slider)`
  margin: 0 1em;
  &.MuiSlider-root {
    width: 20%;
    color: #dadada;
  }
`

const SongAvatar = styled(Avatar)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 2em;
  border: 0.1em solid #dadada;
  &.MuiAvatar-root {
    width: 3em;
    height: 3em;
  }
`

const Song = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 30%;
  height: 13vh;
  & h6 {
    font-size: 1em;
    font-family: "nunito";
    color: #dadada;
    font-weight: 900;
  }
  & p {
    font-size: 0.7em;
    font-family: "nunito";
    color: #dadada;
    font-weight: 400;
  }
  & svg {
    color: #dadada;
  }
  @media only screen and (max-width: 1000px) {
    width: 300px;
    & h6 {
      width: 200px;
    }
    & p {
      width: 200px;
    }
  }
`

const MoreService = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30vw;
  height: 13vh;
  & svg {
    color: #dadada;
  }
`

const Container = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  width: 100vw;
  height: 13vh;
  z-index: 100;
  background-color: #120c1c;
`

export default Footer
