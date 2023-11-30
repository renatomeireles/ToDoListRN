import styled from "styled-components/native"
import { defaultTheme } from "@styles/GlobalStyle"

interface DoneProps {
  done: boolean
}

export const Task = styled.View`
  padding: 10px;
  margin-top: 15px;
  font-size: 15px;
  color: ${defaultTheme.secondary};
  border-radius: 3px;
  border-width: 1px;
  border-color: ${defaultTheme.borderColor};
  border-radius: 3px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const TextBox = styled.View`
  width: 70%;
  height: 100%;
  
`
export const TaskText = styled.Text<DoneProps>`
  text-decoration: ${props => props.done ? 'line-through' : 'none'};
  font-size: 15px;
  font-weight: bold;
  color: ${defaultTheme.secondary};
`