import { useSelector } from "react-redux"
import styled from "styled-components"
import { songsSelector } from "../../app/store"
import JustListItem from "../item/JustListItem"

function JustList() {
  const songs = useSelector(songsSelector)
  return (
    <Container>
      {songs?.map((item, index) => (
        <JustListItem key={index} song={item} />
      ))}
    </Container>
  )
}

const Container = styled.div`
  padding: 2em 0;
  display: flex;
  flex-wrap: wrap;
`

export default JustList
