import { useEffect, useState } from "react"
import { useAppApiClient } from "../hooks/useAppApiClient"
import useAsync from "../hooks/useAsync"
import { Live } from "../services/api/types/Live"
import ListContainer from "./item/ListContainer"
import LiveItem from "./item/LiveItem"

function Radio() {
  const api = useAppApiClient()
  const [lives, setLives] = useState<Live[]>([])
  const getLive = useAsync(async () => {
    const response = await api.getLive()
    if (!response) return
    setLives(response)
  })
  useEffect(() => {
    getLive.run()
  }, [])
  return (
    <ListContainer>
      {lives.map((item, index) => (
        <LiveItem key={index} live={item} />
      ))}
    </ListContainer>
  )
}

export default Radio
