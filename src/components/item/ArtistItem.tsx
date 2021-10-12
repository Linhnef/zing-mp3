import { NavLink } from "react-router-dom"
import styled from "styled-components"

type ArtistItemProps = {
  image: string
}

function ArtistItem(props: ArtistItemProps) {
  return (
    <NavLink to="#">
      <Container>
        <Image src={props.image}></Image>
      </Container>
    </NavLink>
  )
}

const Container = styled.div`
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0 1.18em;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`

const Image = styled.img`
  height: 12em;
  min-width: 10em;
  max-width: 10em;
  border-radius: 0.5em;
  transition: transform 1s ease-in-out;
`

export default ArtistItem
