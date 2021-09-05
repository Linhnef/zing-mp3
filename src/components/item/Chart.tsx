import { LineChart, Line } from "recharts"
import { ChartType } from "../../services/api/types/Chart"
import styled from "styled-components"

interface ChartProps {
  data: ChartType[]
}

function Chart(props: ChartProps) {
  return (
    <Container>
      <ChartContainer width={600} height={200} data={props.data}>
        <Line type="monotone" dataKey="uv" stroke="#7c0e61" />
      </ChartContainer>
    </Container>
  )
}

const Container = styled.div`
  cursor: pointer;
  width: 100%;
  padding: 2em;
  margin-top: 8em;
  @media only screen and (max-width: 1200px) {
    margin-left: 5em;
  }
`

const ChartContainer = styled(LineChart)``

export default Chart
