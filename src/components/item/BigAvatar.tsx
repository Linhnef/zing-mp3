import { Avatar } from "@material-ui/core"
import styled from "styled-components"

const BigAvatar = styled(Avatar).attrs((props) => ({ ...props }))`
  &.MuiAvatar-root {
    width: 5em;
    height: 5em;
    border: 0.1em solid #ffff;
  }
`

export default BigAvatar
