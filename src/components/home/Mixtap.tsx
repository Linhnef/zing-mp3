import React, { useEffect, useState } from "react"
import { useAppApiClient } from "../../hooks/useAppApiClient"
import useAsync from "../../hooks/useAsync"
import { Mixtape } from "../../services/api/types/MIxtape"
import ListContainer from "../item/ListContainer"
import MixtapeItem from "../item/MisxtapeItem"

function Mixtap() {
  const api = useAppApiClient()
  const [mixtaps, setMixtapes] = useState<Mixtape[]>([])
  const getMixtap = useAsync(async () => {
    const response = await api.getMixtape()
    if (!response) return
    setMixtapes(response)
  })
  useEffect(() => {
    getMixtap.run()
  }, [])
  return (
    <ListContainer>
      {mixtaps.map((item, index) => (
        <MixtapeItem key={index} mixtap={item} />
      ))}
    </ListContainer>
  )
}

export default Mixtap
