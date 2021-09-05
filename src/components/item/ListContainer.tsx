import styled from "styled-components"

const ListContainer = styled.div.attrs((props) => ({ ...props }))`
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
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
  }
`

export default ListContainer
