import styled from "styled-components"
import { Typography } from "@material-ui/core"
import SearchIcon from "@material-ui/icons/Search"

type SearchMenuProps = {
  song: string
  action: () => void
}

function MenuItem(props: SearchMenuProps) {
  return (
    <SearchMenuItem onClick={() => props.action()}>
      <SearchIcon />
      <Tetx>Song</Tetx>
    </SearchMenuItem>
  )
}

const Tetx = styled(Typography)`
  &.MuiTypography-body1 {
    font-family: "nunito";
    margin: 0 1em;
  }
`

const SearchMenuItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0.3em 0;
  border-radius: 0.5em;
  color: #dadada;
  padding: 0.5em 1em;

  &:hover {
    cursor: pointer;
    background-color: rgba(31, 52, 98, 0.3);
  }
`

export default MenuItem
