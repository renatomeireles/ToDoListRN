import * as S from "./styles"
import ListCheck from "@assets/list-check-solid.svg"


export default function NoTask() {

  return (
    <>
      <S.Container>
          <S.NoTaskText>Não há tarefas</S.NoTaskText>
          <ListCheck  fill={'#727272'} width={100} height={100} style={{ marginTop: 20 }} />
      </S.Container>


    </>
  )
}