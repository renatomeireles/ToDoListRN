import React from "react"
import { View } from "react-native"
import * as S from "./styles"
import Todo from "@components/ToDo"



function Home() {
  return (
    <View testID="home-screen">
      <S.Content>
      </S.Content>
      <Todo />
    </View>
  )
}

export default Home
