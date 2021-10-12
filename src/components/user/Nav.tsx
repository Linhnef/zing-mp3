import { CardMedia, IconButton, ListItem, ListItemText, Toolbar, Typography } from "@material-ui/core"
import styled from "styled-components"
import CloseIcon from "@material-ui/icons/Close"
import DragHandleIcon from "@material-ui/icons/DragHandle"
import { useState } from "react"
import { useSelector } from "react-redux"
import { songsSelector } from "../../app/store"
import PannerAnimation from "./PannerAnimation"

function Nav() {
  const [active, setActive] = useState(true)
  const songs = useSelector(songsSelector)
  return (
    <>
      <Container>
        <MenuContainer>
          <NavTool active={active}>
            <ListItem>
              <ListItemText>
                <Text>Song</Text>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                <Text>Playlist</Text>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                <Text>Artist</Text>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                <Text>Album</Text>
              </ListItemText>
            </ListItem>
            <SlideButton>
              <IconButton
                onClick={() => {
                  setActive(!active)
                }}
              >
                {active ? <CloseIcon /> : <DragHandleIcon />}
              </IconButton>
            </SlideButton>
          </NavTool>
        </MenuContainer>
        <SongContainer>
          <PannerAnimation />
        </SongContainer>
      </Container>
    </>
  )
}

const SongContainer = styled.div`
  width: 90%;
  padding: 2em 0;
`

const Text = styled(Typography)`
  &.MuiTypography-body1 {
    font-family: "nunito";
    &:hover {
      cursor: pointer;
    }
  }
`

const SlideButton = styled.div`
  transform: rotate(-765deg) translateY(5.5px);
  transition: transform 0.6s linear, opacity 0.6s linear;
`
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const MenuContainer = styled.div`
  width: 40%;
`

interface NavToolProps {
  active: boolean
}

const NavTool = styled(Toolbar)<NavToolProps>`
  background-color: transparent;
  border-radius: 2em;
  border: 0.1em solid #dadada;
  transform: ${(props) => (props.active ? "translateX(0em)" : "translateX(11em)")};
  transition: transform 0.5s linear;
  width: ${(props) => (props.active ? "auto" : "4.7vw")};
  & li {
    transform: rotateY(0deg);
    transition: transform 0.6s linear, opacity 0.6s linear;
    display: ${(props) => (props.active ? "" : "none")};
  }
  & div {
    transform: ${(props) => (props.active ? "translateX(0em)" : "translateX(-1.1em)")};
    & span {
      color: #ffff;
    }
  }
`

export default Nav
