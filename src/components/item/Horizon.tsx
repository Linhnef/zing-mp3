import styled from "styled-components"

function Horizon() {
  return (
    <Container>
      <Hr />
    </Container>
  )
}

const Hr = styled.hr`
  border: 0.005em solid rgba(0, 0, 0, 0.2);
`

const Container = styled.div`
  width: 80%;
  margin-left: 10%;
`

export default Horizon
