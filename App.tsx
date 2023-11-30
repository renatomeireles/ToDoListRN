import React from "react"
import { SafeAreaView, StatusBar } from "react-native"
import { GlobalStyle, defaultTheme } from "@styles/GlobalStyle"
import Home from "@screens/Home"

function App() {
  return (
    <GlobalStyle>
      <SafeAreaView>
        <StatusBar
        backgroundColor={defaultTheme.primary}
        barStyle="light-content"
      />
        <Home />
      </SafeAreaView>
    </GlobalStyle>

  )

}

export default App
