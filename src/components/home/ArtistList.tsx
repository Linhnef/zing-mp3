import React, { useEffect, useState } from "react"
import { useAppApiClient } from "../../hooks/useAppApiClient"
import useAsync from "../../hooks/useAsync"
import { Artist } from "../../services/api/types/Artise"
import ArtistItem from ".././item/ArtistItem"
import styled from "styled-components"

function ArtistList() {
  const api = useAppApiClient()
  const [artists, setArtists] = useState<Artist[]>([])
  const getArtise = useAsync(async () => {
    const response = await api.getArtist()
    if (!response) return
    setArtists(response)
  })
  useEffect(() => {
    getArtise.run()
  }, [])
  return (
    <ListContainer>
      {artists.map((item, index) => (
        <ArtistItem image={item.image} />
      ))}
    </ListContainer>
  )
}

const ListContainer = styled.div`
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
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
  @media only screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    width: 100%;
  }
`

export default ArtistList
