import styled from "styled-components/native"

export const defaultTheme = {
  primary: '#0a241f',
  secondary: '#FAFAFA',
  tertiary: '#f0f0f0',
  borderColor: '#858585',
  buttonColor: '#1f6b5e',
}

export const GlobalStyle = styled.View`
  flex: 1;
  background-color: ${defaultTheme.primary};
  color: ${defaultTheme.secondary};
`