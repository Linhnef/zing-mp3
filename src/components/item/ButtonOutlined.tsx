import styled from "styled-components"
import { Button } from "@material-ui/core"

export const ButtonOutlined = styled(Button).attrs((props) => ({ ...props }))`
  &.MuiButton-outlined {
    border-radius: 1em;
    padding: 0 2em;
    border-color: #dadada;
    & .MuiButton-label {
      color: #dadada;
      font-size: 0.8em;
    }
  }
`
