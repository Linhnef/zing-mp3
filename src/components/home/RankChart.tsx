import { Button, Typography } from "@material-ui/core"
import { useEffect, useState } from "react"
import styled from "styled-components"
import { useAppApiClient } from "../../hooks/useAppApiClient"
import useAsync from "../../hooks/useAsync"
import { Rank } from "../../services/api/types/Rank"
import { top } from "../../services/api/data/data"
import { ChartType } from "../../services/api/types/Chart"
import Chart from "../item/Chart"
import RankItem from "../item/RankItem"

function RankChart() {
  const api = useAppApiClient()
  const [data, setData] = useState<ChartType[]>(top)
  const [ranks, setRanks] = useState<Rank[]>([])
  const getRank = useAsync(async () => {
    const response = await api.getRank()
    if (!response) return
    setRanks(response)
  })
  useEffect(() => {
    getRank.run()
  }, [])
  return (
    <Container>
      <RankBoard>
        <ChartTitle>#zingchart</ChartTitle>
        <ItemContainer>
          {ranks.map((item, index) => (
            <RankItem rank={index + 1} song={item.song} action={() => setData(item.chart)} key={index} />
          ))}
        </ItemContainer>
        <ExpendContainer>
          <Expend variant="outlined">Expend</Expend>
        </ExpendContainer>
      </RankBoard>
      <ChartContainer>
        <Chart data={data} />
      </ChartContainer>
    </Container>
  )
}
const ExpendContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Expend = styled(Button)`
  width: 5em;
  &.MuiButton-outlined {
    border-radius: 1em;
    padding: 0 2em;
    border-color: #dadada;
    & .MuiButton-label {
      color: #dadada;
      font-size: 0.8em;
      font-weight: 900;
    }
  }
`

const Container = styled.div`
  display: flex;
  width: 100%;
  @media only screen and (max-width: 1200px) {
    width: 95%;
    flex-direction: column-reverse;
  }
  @media only screen and (max-width: 768px) {
    width: 90%;
  }
`

const ItemContainer = styled.div`
  margin: 0.5em 0;
`
const ChartTitle = styled(Typography)`
  color: #dadada;
  &.MuiTypography-root {
    font-size: 2.2em;
    font-weight: 900;
    font-family: "nunito";
  }
`

const ChartContainer = styled.div`
  width: 70%;
`

const RankBoard = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 30%;
  margin: 1.5em;
  @media only screen and (max-width: 1200px) {
    width: 100%;
  }
`

export default RankChart
