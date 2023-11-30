import React from "react"
import { View } from "react-native"
import LottieView from "lottie-react-native"
import * as S from "./styles"
import Todo from "@components/ToDo"
import Animation from "@assets/ChecklistAnimation.json"


function Home() {
  return (
    <View testID="home-screen">
      <S.Content>
        <LottieView style={{ width: 200, height: 200 }} source={Animation} autoPlay={true} loop />
      </S.Content>
      <Todo />
    </View>
  )
}

export default Home
