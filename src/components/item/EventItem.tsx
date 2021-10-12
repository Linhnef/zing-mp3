import styled from "styled-components"
import { Event } from "../../services/api/types/Event"
import { Button, CardMedia, Typography } from "@material-ui/core"

type EventItemProps = {
  event: Event
}

function EventItem(props: EventItemProps) {
  return (
    <Container>
      <Image image={props.event.image}>
        <TitleContainer>
          <Type>
            <Text variant="overline">{props.event.type}</Text>
          </Type>
          <Text variant="h6">{props.event.title}</Text>
          <Text>{props.event.date}</Text>
        </TitleContainer>
      </Image>
      <ControlContainer>
        <Interact>
          <Text>Interact : +{props.event.interact}</Text>
        </Interact>
        <Control>
          <InteresButton variant="outlined">Interested</InteresButton>
        </Control>
      </ControlContainer>
    </Container>
  )
}

const Text = styled(Typography)`
  &.MuiTypography-overline {
    color: red;
    font-family: "nunito";
    font-size: 0.5em;
    font-weight: 200;
  }
  &.MuiTypography-h6 {
    font-size: 1.1em;
    font-weight: 900;
    font-family: "nunito";
  }
  &.MuiTypography-body1 {
    color: #dadada;
    font-size: 0.8em;
    font-weight: 900;
    font-family: "nunito";
  }
`

const InteresButton = styled(Button)`
  &.MuiButton-outlined {
    border-radius: 2em;
    background-color: #743aa0;
    & .MuiButton-label {
      color: #dadada;
      font-size: 0.9em;
      font-weight: 900;
      font-family: "nunito";
    }
  }
`

const Interact = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  width: 50%;
`
const Control = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
`

const ControlContainer = styled.div`
  margin: 1em 0;
  display: flex;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0.5em;
  cursor: pointer;
`

const Type = styled.div`
  width: min-content;
  padding: 0 0.2em;
  background-color: #dadada;
`
const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 7em;
  left: 1em;
  color: #ffff;
`

const Image = styled(CardMedia)`
  position: relative;
  max-width: 20em;
  min-width: 20em;
  height: 12em;
  border-radius: 1em;
  -moz-box-shadow: inset 0 -5em 5em -5em #000000;
  -webkit-box-shadow: inset 0 -5em 5em -5em #000000;
  box-shadow: inset 0 -5em 5em -5em #000000;
`

export default EventItem
