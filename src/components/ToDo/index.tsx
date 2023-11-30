import React, { useCallback, useEffect, useRef, useState } from "react"
import {
  FlatList,
  Alert,
  TextInput,
  View,
} from "react-native"
import { MMKV } from "react-native-mmkv"
import * as S from "./styles"
import Task from "@components/Task"
import NoTask from "@components/NoTask"
import { TypeTask } from "src/types/TypeTask"
import IconPlus from "@assets/plus.svg"

const storage = new MMKV()

export default function ToDo() {
  const [task, setTask] = useState<string>('')
  const [tasks, setTasks] = useState<TypeTask[]>([])
  const taskInputRef: React.RefObject<TextInput> = useRef<TextInput>(null);

  useEffect(() => {
    const tasks = storage.getString('tasks')
    if (tasks) {
      setTasks(JSON.parse(tasks))
    }
  }, [])

  const taskAdd = () => {
    const newTask = [...tasks, { id: `${Date.now() + Math.random()}`, done: false, task: task.trim() }]
    setTasks(newTask)
    setTask('')
    storage.set('tasks', JSON.stringify(newTask))
    taskInputRef.current?.blur()
  }

  const handleTaskAdd = () => {
    if (!task.trim()) {
      return
    }

    if (tasks.some((t) => t.task === task)) {
      Alert.alert('Ops!', 'Essa tarefa ja foi adicionada.',
        [
          {
            text: "Cancelar",
            style: "cancel",
            onPress: () => {
              setTask('')
            }
          },
          {
            text: "Prosseguir",
            onPress: () => {
              taskAdd()
            },
          },
        ]
      )
      return
    }
    taskAdd()
  }

  const handleTaskDone = (id: string) => {
    const newTask = tasks.map((task) => task.id === id ? ({ ...task, done: !task.done }) : task)
    setTasks(newTask)
    storage.set('tasks', JSON.stringify(newTask))
  }

  const handleTaskDelete = (id: string) => {
    Alert.alert('Deletar Tarefa', 'Tem certeza que deseja deletar essa tarefa?',
      [
        {
          text: "Não",
          style: "cancel",
        },
        {
          text: "Sim",
          onPress: () => {
            const newTask = tasks.filter((task) => task.id !== id)
            setTasks(newTask)
            storage.set('tasks', JSON.stringify(newTask))
          },
        },
      ]
    )
  }
  const handleRenderTask = useCallback(({ item }: { item: TypeTask }) => <Task key={item.id} onTaskDone={() => handleTaskDone(item.id)} onTaskDelete={() => handleTaskDelete(item.id)} {...item} />, [handleTaskDone, handleTaskDelete, tasks])

  return (
    <S.Container testID="todo-component">
      <S.Title>To-Do List</S.Title>
      <S.Form>
        <S.Field
          autoComplete="off"
          autoCorrect={false}
          placeholder="Escreva sua tarefa"
          placeholderTextColor="#afafaf"
          onChangeText={text => setTask(text)}
          value={task}
          onSubmitEditing={handleTaskAdd}
          returnKeyType="done"
          ref={taskInputRef}
          active={!!(taskInputRef.current?.isFocused() && task)}
        />
        <S.Button onPress={handleTaskAdd}>
          <IconPlus fill={'#fff'} width={30} height={30} />
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


