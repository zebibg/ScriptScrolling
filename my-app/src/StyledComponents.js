import styled, {
    css
  } from 'styled-components';
import Teleprompter from './Teleprompter'


export const StyledTeleprompter = styled(
  Teleprompter
)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
`

export const Controls = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`

export const Button = styled.button`
  display: inline-block;
  padding: 1rem 1rem;
  background: grey;
  color: white;
  font-size: 1rem;
  min-width: 5rem;

  ${p =>
    p.secondary &&
    css`
      background: white;
    `}

  &:hover{
    opacity: 70%;
  }
`


export const Title = styled.h1`
  font-size: 2em;
  text-align: center;`;
  

export const SidebarHeader = styled.div`
  background-color:LightGrey;
  display: flex;
  justify-content: flex-end;
  height:80px;
  & h3{
    margin-top: 25px;
    margin-right: 80px;
    display:${props => !props.active && "none"}
  };
  & button{
    margin-right:${props => (props.active ? "20px" : "10px")};
    margin-top:20px;
    margin-bottom:20px;
    }
  `;

export const SidebarBody = styled.div`
  
`;

export const Sidebar = styled.div`
  min-width: ${props => (props.active ? "300px" : "100px")};
  max-width:${props => (props.active ? "300px" : "100px")};
  text-align:${props => (props.active ? "center" : "left")};
  min-height:100%;
  background-color:RosyBrown;
  color: white;
  font-size: 30px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  `;

export const Content = styled.div`
//   margin-left: 100px;
//   margin-left: ${props => props.active && "300px"};
  position:relative;
`;
export const ContentBody = styled.div`
margin-left: 100px;
margin-left: ${props => props.active && "300px"};
  margin-top: auto;
  margin-bottom: auto;`;



  