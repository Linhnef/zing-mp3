import styled from "styled-components"
import BigAvatar from "../item/BigAvatar"
import { ButtonOutlined } from "../item/ButtonOutlined"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import { IconButton, Typography } from "@material-ui/core"

type UserInformationProps = {
  src: string
}

const UserInfomation = (props: UserInformationProps) => {
  return (
    <Container url={props.src}>
      <Control>
        <MoreButton>
          <MoreVertIcon />
        </MoreButton>
        <Code variant="outlined">Code</Code>
        <BuyVip variant="outlined">Buy Vip</BuyVip>
      </Control>
      <BigAvatar src={props.src} />
      <UserName>Linh</UserName>
    </Container>
  )
}

const UserName = styled(Typography)`
  &.MuiTypography-body1 {
    font-size: 2em;
    color: #dadada;
    font-weight: 900;
    font-family: "nunito";
  }
`

const MoreButton = styled(IconButton)`
  float: right;
  display: block;
`

const BuyVip = styled(ButtonOutlined)`
  transition: float 1s ease-in;
  float: right;
  &.MuiButton-outlined {
    margin: 0 1em;
    margin-top: 0.9em;
    background-color: #f8e71d;
    & .MuiButton-label {
      color: #000;
    }
    &:hover {
      & .MuiButton-label {
        color: #ffff;
      }
    }
  }
  @media only screen and (max-width: 1000px) {
    float: left;
  }
`

const Code = styled(ButtonOutlined)`
  float: right;
  &.MuiButton-outlined {
    margin-top: 0.9em;
  }
`

type ContainerProps = {
  url: string
}

const Container = styled.div<ContainerProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-items: center;
  width: 100%;
  padding: 1.5em 0;
  &:before {
    position: absolute;
    top: 0;
    content: "";
    background-image: ${(props) => `url(${props.url})`};
    background-size: cover;
    width: 100%;
    height: 100%;
    opacity: 0.01;
  }
`

const Control = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  display: block;
  align-items: center;
  & svg {
    color: #ffff;
  }
`

export default UserInfomation
