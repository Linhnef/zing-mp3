import styled from "styled-components"
import { useState } from "react"
import AdsItem from "./item/AdsItem"
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos"
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos"
import { IconButton, Typography } from "@material-ui/core"
import { useEffect } from "react"
const anh1 = "https://photo-zmp3.zadn.vn/banner/4/4/6/e/446e888537f27e9e4c569690b90a9bf3.jpg"
const anh2 = "https://photo-zmp3.zadn.vn/banner/0/d/9/c/0d9ca3f0ae812e94c0fa618b66ac6fa4.jpg"
const anh3 = "https://photo-zmp3.zadn.vn/banner/3/3/6/1/3361a0d09d7e557d849df9e3d0424827.jpg"
function Ads() {
  const [position, setPosition] = useState(0)

  useEffect(() => {
    let index = 0
    const effect = setInterval(() => {
      if (index > 2) index = 0
      setPosition(index)
      index++
    }, 4000)
    return () => {
      clearInterval(effect)
    }
  }, [])
  const next = () => {
    if (position === 2) setPosition(0)
    setPosition(position + 1)
  }

  const pre = () => {
    if (position === 0) setPosition(2)
    setPosition(position - 1)
  }

  return (
    <Container>
      <Panner>
        <AdsTitle>Ads</AdsTitle>
      </Panner>
      <PrevIcon onClick={() => pre()}>
        <ArrowBackIosIcon />
      </PrevIcon>
      <AdsItem responsive={position === 1} x={position === 0 ? 0 : position === 1 ? 4 : 2} image={anh1} />
      <AdsItem responsive={position === 2} x={position === 1 ? 0 : position === 0 ? 2 : 4} image={anh2} />
      <AdsItem responsive={position === 0} x={position === 2 ? 0 : position === 0 ? 4 : 2} image={anh3} />
      <NextIcon onClick={() => next()}>
        <ArrowForwardIosIcon />
      </NextIcon>
    </Container>
  )
}

const AdsTitle = styled(Typography)`
  color: rgba(148, 142, 142, 0.3);
  &.MuiTypography-root {
    font-size: 15em;
    font-weight: 900;
    font-family: "nunito";
  }
`

const Panner = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;
  opacity: 0.2;
`

const NextIcon = styled(IconButton)`
  position: absolute;
  top: 3em;
  left: 91%;
  visibility: hidden;
  z-index: 100;
  &.MuiIconButton-root {
    background-color: rgba(150, 146, 146, 0.3);
  }
  & svg {
    color: #dadada;
  }
`

const PrevIcon = styled(IconButton)`
  position: absolute;
  top: 3em;
  z-index: 100;
  visibility: hidden;
  &.MuiIconButton-root {
    background-color: rgba(150, 146, 146, 0.3);
  }
  & svg {
    color: #dadada;
  }
`

const Container = styled.div`
  position: relative;
  display: flex;
  width: 90%;
  margin-top: 7em;
  margin-left: 5%;
  height: auto;
  cursor: pointer;
  &:hover {
    & button {
      visibility: inherit;
    }
  }
  @media only screen and (max-width: 1000px) {
    width: 74%;
    margin-left: 13%;
  }
`

export default Ads
