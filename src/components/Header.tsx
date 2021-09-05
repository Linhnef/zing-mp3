import styled from "styled-components"
import { useState, FocusEvent } from "react"
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore"
import { IconButton, TextField, InputAdornment, ClickAwayListener, Typography, Avatar } from "@material-ui/core"
import NavigateNextIcon from "@material-ui/icons/NavigateNext"
import SearchIcon from "@material-ui/icons/Search"
import MenuItem from "./item/MenuItem"
import ColorLensIcon from "@material-ui/icons/ColorLens"
import PublishIcon from "@material-ui/icons/Publish"
import SettingsIcon from "@material-ui/icons/Settings"

function Header() {
  const [menu, setMenu] = useState(false)
  const [active, setActive] = useState(false)
  window.addEventListener("scroll", (event) => {
    if (window.pageYOffset > 176) {
      setActive(true)
    } else {
      setActive(false)
    }
  })
  return (
    <Container active={active}>
      <IconButton>
        <NavigateBeforeIcon />
      </IconButton>
      <IconButton>
        <NavigateNextIcon />
      </IconButton>
      <ClickAwayListener onClickAway={() => setMenu(false)}>
        <SearchMenu active={menu}>
          <SearchBox
            variant="outlined"
            onFocus={(event: FocusEvent<HTMLInputElement | HTMLTextAreaElement> | undefined) => setMenu(true)}
            placeholder="Search by song name, author or MV ..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <ItemContainer>
            <MenuItem action={() => setMenu(false)} song="Song" />
            <MenuItem action={() => setMenu(false)} song="Song" />
            <MenuItem action={() => setMenu(false)} song="Song" />
            <MenuItem action={() => setMenu(false)} song="Song" />
          </ItemContainer>
        </SearchMenu>
      </ClickAwayListener>
      <Menu>
        <MenuButton>
          <ColorLensIcon />
        </MenuButton>
        <MenuButton>
          <PublishIcon />
        </MenuButton>
        <MenuButton>
          <SettingsIcon />
        </MenuButton>
        <MenuButton>
          <Avatar />
        </MenuButton>
      </Menu>
    </Container>
  )
}

const MenuButton = styled(IconButton)`
  &.MuiIconButton-root {
    margin: 0 0.2em;
    background-color: rgba(110, 108, 108, 0.1);
    &:hover {
      background-color: rgba(0, 0, 0, 0.05);
    }
  }
`

const Menu = styled.div`
  position: absolute;
  left: 60vw;
  display: flex;
  align-items: center;
  justify-content: right;
`
interface SearchMenuProps {
  active: boolean
}
const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1em 2em;
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

const SearchMenu = styled.div<SearchMenuProps>`
  position: absolute;
  top: 1.3em;
  left: 8em;
  display: flex;
  flex-direction: column;
  width: 50%;
  height: ${(props) => (props.active ? "20em" : "0em")};
  border-radius: 2em;
  z-index: 100;
  background-color: rgba(31, 52, 98, 0.1);
`

const SearchBox = styled(TextField)`
  width: 100%;
  & .MuiOutlinedInput-root {
    border-radius: 2em;
    color: #dadada;
    font-family: "nunito";
    background-color: rgba(31, 52, 98, 0.1);
    & .MuiOutlinedInput-input {
      padding: 0.8em;
    }
  }
`

interface ContainerProps {
  active: boolean
}
const Container = styled.div<ContainerProps>`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  background-color: #170f23;
  width: 82vw;
  padding: 1em;
  margin-left: 18vw;
  z-index: 50;
  border-bottom: 0.01 solid #000;
  & svg {
    color: #dadada;
  }
  @media only screen and (max-width: 1000px) {
    margin-left: 70px;
    width: 95vw;
  }
  @media only screen and (max-width: 768px) {
    display: none;
  }
`

export default Header
