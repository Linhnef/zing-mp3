import styled from "styled-components"
import { CardMedia, IconButton, Typography } from "@material-ui/core"
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline"
import { NavLink } from "react-router-dom"
import MicNoneIcon from "@material-ui/icons/MicNone"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import { Song } from "../../services/api/types/Song"
import { useContext } from "react"
import { SongContext } from "../../contexts/SongContext"

interface JustListItemProps {
  song: Song
}

function JustListItem(props: JustListItemProps) {
  const { setCurrentSong } = useContext(SongContext)
  return (
    <Container onClick={() => setCurrentSong(props.song)}>
      <ImgaeContainer>
        <Image image={props.song.image}>
          <Button>
            <PlayCircleOutlineIcon />
          </Button>
        </Image>
      </ImgaeContainer>
      <Information>
        <TextContainer>
          <Text variant="h6">{props.song.name}</Text>
          {
            <Link to="#">
              <Text>{props.song.author}</Text>
            </Link>
          }
        </TextContainer>
        <ButtonContainer>
          <Button>
            <MicNoneIcon />
          </Button>
          <Button>
            <MoreVertIcon />
          </Button>
        </ButtonContainer>
      </Information>
    </Container>
  )
}
const Information = styled.div`
  width: 70%;
  display: flex;
`

const Link = styled(NavLink)`
  text-decoration: none;
`

const ButtonContainer = styled.div`
  width: 30%;
  display: flex;
  & svg {
    color: #dadada;
  }
`

const TextContainer = styled.div`
  width: 60%;
  margin-left: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const Text = styled(Typography)`
  &.MuiTypography-h6 {
    color: #dadada;
    font-family: "nunito";
    font-size: 0.7em;
    font-weight: 900;
    margin: 0.1em 0;
    &:hover {
      color: #c662ef !important;
    }
  }
  &.MuiTypography-body1 {
    font-family: "nunito";
    font-size: 0.6em;
    color: #dadada;
    &:hover {
      color: #c662ef;
    }
  }
`

const Button = styled(IconButton)`
  &.MuiIconButton-root {
    visibility: hidden;
  }
`

const Container = styled.div`
  position: relative;
  display: flex;
  width: 30%;
  margin: 1em;
  cursor: pointer;
  border-radius: 0.5em;
  cursor: pointer;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    & button {
      visibility: visible !important;
    }
  }
  &:hover:after {
    margin: 1em;
    margin-top: 0.2em;
    content: "";
    position: absolute;
    top: 0;
    width: 2.5em;
    height: 2.5em;
    border-radius: 0.5em;
    background-color: rgba(0, 0, 0, 0.3);
  }
  @media only screen and (max-width: 1200px) {
    width: 45%;
  }
`
const ImgaeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1em;
`

const Image = styled(CardMedia)`
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  height: 2.5em;
  min-width: 2.5em;
  max-width: 2.5em;
  border-radius: 0.5em;
  transition: transform 1s ease-in-out;
  & svg {
    color: #ffff;
    z-index: 100;
  }
`

export default JustListItem
