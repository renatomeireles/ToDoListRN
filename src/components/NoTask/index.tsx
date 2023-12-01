import LottieView from "lottie-react-native"
import Animation from "@assets/ChecklistAnimation.json"
import * as S from "./styles"


export default function NoTask() {

  return (
    <>
      <S.Container>
          <S.NoTaskText>Não há tarefas</S.NoTaskText>
          <LottieView style={{ width: 200, height: 200 }} source={Animation} autoPlay={true} loop />
      </S.Container>


    </>
  )
}