import { Typography, IconButton } from "@material-ui/core"
import { ChangeEvent, useRef, useState } from "react"
import styled from "styled-components"
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline"
import SkipNextIcon from "@material-ui/icons/SkipNext"
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious"
import CallSplitIcon from "@material-ui/icons/CallSplit"
import CachedIcon from "@material-ui/icons/Cached"
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline"

interface SoundTimeProps {
  isPlay: boolean
  currentTime: number
  duration: number
  percentage: number
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  play: () => void
  stop: () => void
}

function SoundTime(props: SoundTimeProps) {
  const rangeRef = useRef<HTMLInputElement>(null)
  return (
    <Container>
      <ControlBar>
        <IconButton>
          <CallSplitIcon />
        </IconButton>
        <IconButton>
          <SkipPreviousIcon />
        </IconButton>
        {props.isPlay ? (
          <IconButton onClick={() => props.stop()}>
            <PauseCircleOutlineIcon fontSize="large" />
          </IconButton>
        ) : (
          <IconButton onClick={() => props.play()}>
            <PlayCircleOutlineIcon fontSize="large" />
          </IconButton>
        )}

        <IconButton>
          <SkipNextIcon />
        </IconButton>
        <IconButton>
          <CachedIcon />
        </IconButton>
      </ControlBar>
      <TimeContainer>
        <Text>{(props.currentTime / 60).toFixed(2)}</Text>
        <Range
          type="range"
          value={(props.currentTime / props.duration) * 100}
          ref={rangeRef}
          step="0.01"
          onChange={props.onChange}
        />
        <Text>{(props.duration / 60).toFixed(2)}</Text>
      </TimeContainer>
    </Container>
  )
}
const Text = styled(Typography)`
  &.MuiTypography-body1 {
    color: #dadada;
    font-size: 0.8em;
    font-weight: 600;
  }
`

const ControlBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 7vh;
  & svg {
    color: #ffff;
  }
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 40vw;
  height: 13vh;
  cursor: pointer;
`

const Range = styled.input`
  width: 90%;
  margin: 0 5%;
`

const TimeContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default SoundTime
