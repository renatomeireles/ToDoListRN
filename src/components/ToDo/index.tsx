import React, { useCallback } from "react"
import {
  FlatList,
  Text,
  View,
} from "react-native"
import * as S from "./styles"
import Task from "@components/Task"
import NoTask from "@components/NoTask"
import { TypeTask } from "src/types/TypeTask"
import IconPlus from "@assets/plus.svg"
import { useTask } from '../../hooks/useTask'

export default function ToDo() {

  const { task, setTask, tasks, handleTaskAdd, handleTaskDone, handleTaskDelete, clearTasks } = useTask()

  const handleRenderTask = useCallback(({ item }: { item: TypeTask }) => <Task key={item.id} onTaskDone={() => handleTaskDone(item.id)} onTaskDelete={() => handleTaskDelete(item.id)} {...item} />, [handleTaskDone, handleTaskDelete, tasks])

  return (
    <S.Container testID="todo-component">
      <S.BoxTitle>
        <S.Title>To-Do List</S.Title>
        <S.ClearButton onPress={clearTasks} disabled={tasks.length === 0}>
          <Text style={{ color: '#FAFAFA', fontWeight: 'bold' }}>Limpar lista</Text>
        </S.ClearButton>
      </S.BoxTitle>

      <S.Form>
        <S.Field
          autoComplete="off"
          autoCorrect={false}
          placeholder="Escreva suas tarefas"
          placeholderTextColor="#afafaf"
          onChangeText={text => setTask(text)}
          value={task}
          onSubmitEditing={handleTaskAdd}
          returnKeyType="done"
          active={!!(task)}
        />
        <S.Button onPress={handleTaskAdd} disabled={task.length === 0}>
          <IconPlus fill={'#FAFAFA'} width={30} height={30} />
        </S.Button>
      </S.Form>
      {tasks && tasks.length > 0 ?
        (
          <View>
            <S.TitleDone>Tarefas a fazer: {tasks.filter(item => !item.done).length}</S.TitleDone>
            <FlatList
              data={tasks.filter(item => !item.done)}
              keyExtractor={item => item.id}
              renderItem={handleRenderTask} />
            <S.TitleNotDone>Tarefas concluídas: {tasks.filter(item => item.done).length}</S.TitleNotDone>
            <FlatList
              data={tasks.filter(item => item.done)}
              keyExtractor={item => item.id}
              renderItem={handleRenderTask}
            />
          </View>
        )
        :
        (
          <NoTask />
        )
      }
    </S.Container>
  )
}


