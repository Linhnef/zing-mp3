import styled from "styled-components"
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline"
import { CardMedia, Typography, IconButton, Badge, Avatar } from "@material-ui/core"
import { Live } from "../../services/api/types/Live"

type LiveItemProps = {
  live: Live
}

function LiveItem(props: LiveItemProps) {
  return (
    <Container>
      <Badge
        badgeContent={<UserLive src={props.live.avatar} />}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <Badge
          color="secondary"
          overlap="rectangle"
          badgeContent="Live"
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <Image image={props.live.image}>
            <Button>
              <PlayCircleOutlineIcon fontSize="large" />
            </Button>
          </Image>
        </Badge>
      </Badge>
      <Text variant="h6">{props.live.Title}</Text>
      <Text>{props.live.member} member online</Text>
    </Container>
  )
}

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
    color: #dadada;
    font-family: "nunito";
    font-size: 0.8em;
  }
`

const UserLive = styled(Avatar)`
  border: 0.1em solid #000;
`

const Button = styled(IconButton)`
  &.MuiIconButton-root {
    visibility: hidden;
  }
`

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 0 2.7em;
  padding: 1em 0;
  height: auto;
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
    margin: 1em 0;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.3);
  }
`

const Image = styled(CardMedia)`
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  height: 9em;
  min-width: 10em;
  max-width: 10em;
  border-radius: 50%;
  transition: transform 1s ease-in-out;
  & svg {
    color: #ffff;
    z-index: 100;
  }
`

export default LiveItem
