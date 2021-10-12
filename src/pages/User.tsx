import styled from "styled-components"
import Nav from "../components/user/Nav"
import UserInfomation from "../components/user/UserInfomation"
import { EmptyLayout } from "../layouts/EmptyLayout"
import avatar from "../image/avatar.jpg"

function User() {
  return (
    <EmptyLayout>
      <Container>
        <InformationContainer>
          <UserInfomation src={avatar} />
        </InformationContainer>
        <NavContainer>
          <Nav />
        </NavContainer>
      </Container>
    </EmptyLayout>
  )
}

const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1em 0;
`

const InformationContainer = styled.div`
  margin-top: 5em;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 18vw;
  width: 82vw;
  height: 87vh;
  @media only screen and (max-width: 1000px) {
    margin-left: 70px;
    width: 95vw;
  }
  @media only screen and (max-width: 768px) {
    width: 94vw;
    margin-left: 3vw;
  }
  overflow-x: hidden;
  overflow-y: scroll;
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
`

export default User
