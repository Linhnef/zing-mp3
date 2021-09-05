import { useContext } from "react"
import styled from "styled-components"
import { SongContext } from "../contexts/SongContext"
import JustListItem from "./item/JustListItem"

function JustList() {
  const { songs } = useContext(SongContext)
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
