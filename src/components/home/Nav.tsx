import styled from "styled-components"
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic"
import AccountCircleIcon from "@material-ui/icons/AccountCircle"
import AdjustIcon from "@material-ui/icons/Adjust"
import TrendingUpIcon from "@material-ui/icons/TrendingUp"
import RadioIcon from "@material-ui/icons/Radio"
import PanoramaFishEyeIcon from "@material-ui/icons/PanoramaFishEye"
import MusicNoteIcon from "@material-ui/icons/MusicNote"
import CategoryIcon from "@material-ui/icons/Category"
import StarOutlineIcon from "@material-ui/icons/StarOutline"
import MusicVideoIcon from "@material-ui/icons/MusicVideo"
import AlbumIcon from "@material-ui/icons/Album"
import ReplayIcon from "@material-ui/icons/Replay"
import Horizon from "../item/Horizon"
import logo from "../../image/logo-mp3.svg"
import { Button, IconButton, Typography } from "@material-ui/core"
import CreateIcon from "@material-ui/icons/Create"
import AddIcon from "@material-ui/icons/Add"
import { useState } from "react"
import { navType } from "../../services/api/types/Nav"
import { useHistory } from "react-router"

function Nav() {
  const [active, setActive] = useState<navType>("DISCOVER")
  const history = useHistory()

  return (
    <Container>
      <LogoContainer>
        <Logo src={logo} />
      </LogoContainer>
      <MainItem>
        <NavItem
          onClick={() => {
            setActive("PRIVATE")
            history.replace("/user")
          }}
          active={active === "PRIVATE"}
        >
          <ItemBackground active={active === "PRIVATE"} />
          <AccountCircleIcon />
          <Title>Private</Title>
        </NavItem>

        <NavItem onClick={() => setActive("DISCOVER")} active={active === "DISCOVER"}>
          <ItemBackground active={active === "DISCOVER"} />
          <AdjustIcon />
          <Title>Discover</Title>
        </NavItem>

        <NavItem onClick={() => setActive("CHART")} active={active === "CHART"}>
          <ItemBackground active={active === "CHART"} />
          <TrendingUpIcon />
          <Title>#zingchart</Title>
        </NavItem>

        <NavItem onClick={() => setActive("RADIO")} active={active === "RADIO"}>
          <ItemBackground active={active === "RADIO"} />
          <RadioIcon />
          <Title>Radio</Title>
        </NavItem>

        <NavItem onClick={() => setActive("FOLLOW")} active={active === "FOLLOW"}>
          <ItemBackground active={active === "FOLLOW"} />
          <PanoramaFishEyeIcon />
          <Title>Follow</Title>
        </NavItem>
        <Horizon />
      </MainItem>
      <SlideBar>
        <NavItem onClick={() => setActive("NEW MUSIC")} active={active === "NEW MUSIC"}>
          <ItemBackground active={active === "NEW MUSIC"} />
          <MusicNoteIcon />
          <Title>New Music</Title>
        </NavItem>

        <NavItem onClick={() => setActive("CATEGORY")} active={active === "CATEGORY"}>
          <ItemBackground active={active === "CATEGORY"} />
          <CategoryIcon />
          <Title>Category</Title>
        </NavItem>

        <NavItem onClick={() => setActive("TOP")} active={active === "TOP"}>
          <ItemBackground active={active === "TOP"} />
          <StarOutlineIcon />
          <Title>Top 100</Title>
        </NavItem>

        <NavItem onClick={() => setActive("MV")} active={active === "MV"}>
          <ItemBackground active={active === "MV"} />
          <MusicVideoIcon />
          <Title>MV</Title>
        </NavItem>
        <Ads>
          <Title>Listen music no ads with VIP music stock</Title>
          <BuyVIP>BUY VIP</BuyVIP>
        </Ads>
        <Library>
          <Title>Library</Title>
          <IconButton>
            <CreateIcon />
          </IconButton>
        </Library>
        <NavItem onClick={() => setActive("SONG")} active={active === "SONG"}>
          <ItemBackground active={active === "SONG"} />
          <AlbumIcon />
          <Title>Song</Title>
        </NavItem>
        <NavItem onClick={() => setActive("PLAYLIST")} active={active === "PLAYLIST"}>
          <ItemBackground active={active === "PLAYLIST"} />
          <LibraryMusicIcon />
          <Title>Playlist</Title>
        </NavItem>
        <NavItem onClick={() => setActive("RECENTLY")} active={active === "RECENTLY"}>
          <ItemBackground active={active === "RECENTLY"} />
          <ReplayIcon />
          <Title>Recently</Title>
        </NavItem>
      </SlideBar>
      <CreatePlayList>
        <IconButton>
          <AddIcon />
        </IconButton>
        <Title>New Playlist</Title>
      </CreatePlayList>
    </Container>
  )
}

const Library = styled.div`
  display: flex;
  align-items: center;
  height: 3.3em;
  & p {
    font-size: 1em !important;
    padding-right: 3em;
  }
  & svg {
    display: none;
    color: #ffff;
    width: 0.8em;
    height: 0.8em;
  }
  &:hover {
    & svg {
      display: inherit;
    }
  }
  @media only screen and (max-width: 1000px) {
    display: none;
  }
`

const BuyVIP = styled(Button)`
  width: 50%;
  &.MuiButtonBase-root {
    margin-left: 25%;
    background-color: #ffdb00;
    border-radius: 2em;
  }
  &.MuiButton-text {
    font-weight: 900;
  }
`

const Ads = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  background: linear-gradient(#e66465, #9198e5);
  width: 90%;
  margin-left: 5%;
  border-radius: 1em;
  padding: 1em 0;
  @media only screen and (max-width: 1000px) {
    display: none;
  }
`

const CreatePlayList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3.25em;
  border-top: 0.001em solid rgba(146, 144, 144, 0.4);
  border-bottom: 0.001em solid rgba(146, 144, 144, 0.4);
  & p {
    font-size: 1em !important;
  }
  & svg {
    color: #ffff;
  }
  &:hover {
    cursor: pointer;
  }
  @media only screen and (max-width: 768px) {
    display: none;
  }
`

const SlideBar = styled.div`
  height: 14em;
  overflow-x: hidden;
  overflow-y: scroll;
  @media only screen and (max-width: 768px) {
    display: none;
  }
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

interface NavItemProps {
  active: boolean
}

const Title = styled(Typography)`
  &.MuiTypography-body1 {
    color: #dadada;
    font-family: "nunito";
    font-size: 0.8em;
    font-weight: 900;
    margin: 0 1em;
    @media only screen and (max-width: 1000px) {
      display: none;
    }
  }
`

const MainItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: transparent;
  @media only screen and (max-width: 768px) {
    flex-direction: row;
  }
`

const ItemBackground = styled.div<NavItemProps>`
  position: absolute;
  left: 0;
  width: 1%;
  height: 100%;
  background-color: ${(props) => (props.active ? "#743aa0" : "")};
  @media only screen and (max-width: 768px) {
    height: 1%;
    width: 100%;
    bottom: 0;
  }
`

const NavItem = styled.div<NavItemProps>`
  position: relative;
  display: flex;
  justify-content: left 2em;
  align-items: center;
  width: 100%;
  padding: 0.5em 2em;
  margin-left: 1%;
  background-color: ${(props) => (props.active ? " rgba(0, 0, 0, 0.1)" : "")};
  & svg {
    color: #dadada;
  }
  &:hover {
    cursor: pointer;
    & p {
      color: #ffff;
    }
    & svg {
      color: #ffff;
    }
  }
  @media only screen and (max-width: 1000px) {
    justify-content: center;
  }
`

const LogoContainer = styled.div`
  margin: 0.5em 0;
  width: 80%;
  margin-left: 10%;
  @media only screen and (max-width: 1000px) {
    width: 100%;
  }
`

const Logo = styled.img`
  width: 80%;
  height: 2.5em;
`

const Container = styled.div`
  position: fixed;
  left: 0;
  background-color: rgba(44, 43, 43, 0.2);
  width: 18vw;
  height: 88vh;
  @media only screen and (max-width: 1000px) {
    width: 70px;
  }
  @media only screen and (max-width: 768px) {
    width: 100vw;
    height: 70px;
    display: flex;
    top: 0;
    overflow-x: scroll;
    overflow-y: hidden;
    z-index: 100;
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
  }
`

export default Nav
