import React, { useEffect, useState } from "react"
import { useAppApiClient } from "../hooks/useAppApiClient"
import useAsync from "../hooks/useAsync"
import { Artist } from "../services/api/types/Artise"
import ArtistItem from "./item/ArtistItem"
import ListContainer from "./item/ListContainer"

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

export default ArtistList
