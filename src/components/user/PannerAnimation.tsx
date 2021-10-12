import { CardMedia } from "@material-ui/core"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import styled from "styled-components"
import { songsSelector } from "../../app/store"
import JustListItem from "../item/JustListItem"

const position = [0, 3, 6]

const scale = [1.15, 1.45, 1.75]

const PannerAnimation = () => {
  const songs = useSelector(songsSelector)
  const [z, setZ] = useState(0)

  useEffect(() => {
    let index = 0
    const effect = setInterval(() => {
      if (index > 2) index = 0
      setZ(index)
      index++
    }, 1000)
    return () => {
      clearInterval(effect)
    }
  }, [])
  return (
    <Container>
      <PannerContainer>
        {songs
          ?.filter((item, index) => index <= 2)
          .map((item, index) => (
            <Image
              opacity={position[Math.abs(index - z)] === 6}
              scale={scale[Math.abs(index - z)]}
              position={position[Math.abs(index - z)]}
              image={item.image}
              key={index}
            />
          ))}
      </PannerContainer>
      <SongContainer>
        {songs?.map((item, index) => (
          <JustListItem key={index} song={item} />
        ))}
      </SongContainer>
    </Container>
  )
}
const Container = styled.div`
  display: flex;
`

const SongContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 70%;
  height: 15em;
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

const PannerContainer = styled.div`
  position: relative;
  width: 30%;
  padding: 5em 0;
  margin: 3em 0;
`

type ImageProps = {
  position: number
  scale: number
  opacity: boolean
}

const Image = styled(CardMedia)<ImageProps>`
  transition: all 1s ease-in-out;
  position: absolute;
  top: 1em;
  left: ${(props) => props.position}em;
  max-width: 10em;
  min-width: 10em;
  height: 8em;
  transform: ${(props) => `scale(${props.scale})`};
  border-radius: 0.5em;
  opacity: ${(props) => (props.opacity ? 1 : 0.7)};
  z-index: ${(props) => props.position};
`

export default PannerAnimation
