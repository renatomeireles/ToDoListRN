import styled from "styled-components/native"

export const defaultTheme = {
  primary: '#272727',
  secondary: '#fff',
  tertiary: '#f0f0f0',
  borderColor: '#858585',
  buttonColor: '#0749a6',
}

export const GlobalStyle = styled.View`
  flex: 1;
  background-color: ${defaultTheme.primary};
  color: #fff;
`