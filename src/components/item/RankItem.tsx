import { ListItem, ListItemIcon, Typography, CardMedia, IconButton, ListItemText } from "@material-ui/core"
import styled from "styled-components"
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline"
import { Song } from "../../services/api/types/Song"

interface RankItemProps {
  action: () => void
  song: Song
  rank: number
}

function RankItem(props: RankItemProps) {
  return (
    <Container onClick={() => props.action()}>
      <ListItem>
        <Information>
          <ListItemIcon>
            <SongContainer>
              <Text variant="overline">{props.rank}</Text>
              <ImageContainer>
                <Image image={props.song.image}>
                  <Button>
                    <PlayCircleOutlineIcon />
                  </Button>
                </Image>
              </ImageContainer>
              <ListItemText>
                <Text variant="h6">{props.song.name}</Text>
                <Text>{props.song.author}</Text>
              </ListItemText>
            </SongContainer>
          </ListItemIcon>
        </Information>
        <Percent>
          <Text variant="h1">33.3%</Text>
        </Percent>
      </ListItem>
    </Container>
  )
}

const Information = styled.div`
  width: 70%;
`

const Percent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
`

const Text = styled(Typography)`
  &.MuiTypography-overline {
    color: #ffff;
    font-size: 1.5em;
    font-weight: 900;
    font-family: "nunito";
  }
  &.MuiTypography-h6 {
    color: #ffff;
    font-size: 0.7em;
    font-weight: 600;
    font-family: "nunito";
  }
  &.MuiTypography-body1 {
    color: #ffff;
    font-size: 0.5em;
    font-weight: 200;
    font-family: "nunito";
  }
  &.MuiTypography-h1 {
    color: #ffff;
    font-size: 1.5em;
    font-weight: 900;
    font-family: "nunito";
  }
  @media only screen and (max-width: 1200px) {
    &.MuiTypography-h6 {
      font-size: 1em;
    }
    &.MuiTypography-body1 {
      font-size: 0.8em;
    }
  }
  @media only screen and (max-width: 768px) {
    &.MuiTypography-h6 {
      font-size: 0.8em;
    }
    &.MuiTypography-body1 {
      font-size: 0.6em;
    }
  }
`
const SongContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const Button = styled(IconButton)`
  &.MuiIconButton-root {
    visibility: hidden;
  }
`

const Image = styled(CardMedia)`
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  height: 3.5em;
  min-width: 3.5em;
  max-width: 3.5em;
  border-radius: 0.5em;
  & svg {
    color: #ffff;
    z-index: 100;
  }
`
const ImageContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0 1.2em;
  cursor: pointer;
  & h6 {
    color: #dadada;
    font-family: "nunito";
    font-size: 1em;
    font-weight: 900;
    margin: 0.1em 0;
    &:hover {
      color: #c662ef !important;
    }
  }
  & p {
    color: #dadada;
    font-family: "nunito";
    font-size: 0.8em;
    &:hover {
      color: #c662ef !important;
    }
  }
  &:hover {
    & button {
      visibility: visible !important;
    }
  }
  &:hover:after {
    content: "";
    position: absolute;
    top: 0;
    width: 3.5em;
    height: 3.5em;
    border-radius: 0.5em;
    background-color: rgba(0, 0, 0, 0.3);
  }
`

const Container = styled.div`
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 0.5em;
  margin: 0.5em 0;
  &:hover {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.1);
  }

`
export default RankItem
