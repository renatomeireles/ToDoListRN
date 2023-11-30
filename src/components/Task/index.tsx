import { TouchableOpacity, View } from "react-native"
import * as S from "./styles"
import { TypeTask } from "src/types/TypeTask"
import IconCheck from "@assets/square-check-solid.svg"
import IconSquare from "@assets/square-regular.svg"
import IconTrash from "@assets/trash-can-solid.svg"


type TaskProps = TypeTask & {
  onTaskDone: (id: string) => void
  onTaskDelete: (id: string) => void
}

export default function Task({ id, task, done, onTaskDone, onTaskDelete }: TaskProps) {

  return (
    <View testID="task-component">

      <TouchableOpacity onPress={() => onTaskDone(id)}>
        <S.Task>
          { done ?
            <IconCheck fill={'#515151'} width={20} height={20} />
            :
            <IconSquare fill={'#515151'} width={20} height={20} />
          }
          <S.TextBox>
            <S.TaskText done={done}>{task}</S.TaskText>
          </S.TextBox>
          <TouchableOpacity onPress={() => onTaskDelete(id)}>
            <IconTrash fill={'#999999'} width={20} height={20} />
          </TouchableOpacity>
        </S.Task>
      </TouchableOpacity>

    </View>
  )
}