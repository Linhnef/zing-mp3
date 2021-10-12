import { useEffect, useState } from "react"
import { useAppApiClient } from "../../hooks/useAppApiClient"
import useAsync from "../../hooks/useAsync"
import { Live } from "../../services/api/types/Live"
import styled from "styled-components"
import LiveItem from "../item/LiveItem"

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

export default Radio
