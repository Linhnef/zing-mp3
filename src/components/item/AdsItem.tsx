import { CardMedia } from "@material-ui/core"
import styled from "styled-components"

interface AdsItemProps {
  x: number
  responsive: boolean
}
const AdsItem = styled(CardMedia).attrs((props) => ({ ...props }))<AdsItemProps>`
  cursor: pointer;
  position: absolute;
  left: ${(props) => props.x * 10}em;
  max-width: 20em;
  min-width: 20em;
  height: 12em;
  border-radius: 1em;
  transition: 1s linear;
  transform: ${(props) => `translateX(${props.x}em)`};
  @media only screen and (max-width: 1000px) {
    visibility: ${(props) => (props.responsive ? "hidden" : "inherit")};
  }
`

export default AdsItem
