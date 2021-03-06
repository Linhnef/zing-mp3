import { CardMedia, IconButton, Typography } from "@material-ui/core"
import styled from "styled-components"
import { useContext, useState } from "react"
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline"
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"
import FavoriteIcon from "@material-ui/icons/Favorite"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import { Song } from "../../services/api/types/Song"
import { SongContext } from "../../contexts/SongContext"

type SongItemProps = {
  song: Song
}

function SongItem(props: SongItemProps) {
  const [like, setLike] = useState(false)
  const { setCurrentSong } = useContext(SongContext)
  return (
    <Container onClick={() => setCurrentSong(props.song)}>
      <Image image={props.song.image}>
        <Button onClick={() => setLike(!like)}>{!like ? <FavoriteBorderIcon /> : <FavoriteIcon />}</Button>
        <Button>
          <PlayCircleOutlineIcon fontSize="large" />
        </Button>
        <Button>
          <MoreVertIcon />
        </Button>
      </Image>
      <Text variant="h6">{props.song.name}</Text>
      <Text>{props.song.author}</Text>
    </Container>
  )
}

const Button = styled(IconButton)`
  &.MuiIconButton-root {
    visibility: hidden;
  }
`

const Text = styled(Typography)`
  &.MuiTypography-h6 {
    color: #dadada;
    font-family: "nunito";
    font-size: 1em;
    font-weight: 900;
    margin: 0.1em 0;
    &:hover {
      color: #c662ef !important;
    }
  }
  &.MuiTypography-body1 {
    font-family: "nunito";
    font-size: 0.8em;
    color: #dadada;
    &:hover {
      color: #c662ef !important;
    }
  }
`

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0 1.2em;
  cursor: pointer;
  &:hover {
    & button {
      visibility: visible !important;
    }
  }
  &:hover:after {
    content: "";
    position: absolute;
    top: 0;
    width: 10em;
    height: 9em;
    border-radius: 0.5em;
    background-color: rgba(0, 0, 0, 0.3);
  }
  @media only screen and (max-width: 768px) {
    width: 45%;
    margin: 0.5em 0.5em;
  }
`

const Image = styled(CardMedia)`
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  height: 9em;
  min-width: 10em;
  max-width: 10em;
  border-radius: 0.5em;
  transition: transform 1s ease-in-out;
  & svg {
    color: #ffff;
    z-index: 100;
  }
`

export default SongItem
