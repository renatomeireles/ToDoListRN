import styled from "styled-components/native"
import { defaultTheme } from "../../styles/GlobalStyle"

interface ActiveProps {
  active: boolean
}

export const Container = styled.View`
padding: 20px;
`

export const Title = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: ${defaultTheme.secondary};
  margin-bottom: 20px;
`

export const Field = styled.TextInput<ActiveProps>`
  border-color: ${props => props.active ? '#fff' : `${defaultTheme.borderColor}`};
  border-width: 1px;
  padding: 10px;
  font-size: 15px;
  color: ${defaultTheme.secondary};
  background-color: #3b3b3b;
  border-radius: 3px;
  flex: 1;
`
export const Form = styled.View`
  flex-direction: row;
  gap: 10px;
`

export const Button = styled.TouchableOpacity`
  background-color: ${defaultTheme.buttonColor};
  padding: 5px;
  width: 100px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`
export const TitleDone = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${defaultTheme.secondary};
  margin-top: 20px;
`

export const TitleNotDone = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${defaultTheme.secondary};
  margin-top: 20px;
`
