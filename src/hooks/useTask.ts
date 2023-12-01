import { useEffect, useState } from "react"
import { Alert, Keyboard } from "react-native"
import { storageService } from "src/storage/storageService"
import { TypeTask } from "src/types/TypeTask"


export const useTask = () => {

  const [task, setTask] = useState<string>("")
  const [tasks, setTasks] = useState<TypeTask[]>([])

  useEffect(() => {
    const taskRecovery = storageService.getItem('tasks')
    if (taskRecovery) {
      setTasks(taskRecovery)
    }
  }, [])

const taskAdd = () => {
  const newTask = [...tasks, { id: `${tasks.length+Math.random()}`, done: false, task: task.trim() }]
  setTasks(newTask)
  setTask('')
  storageService.setItem('tasks', newTask)
}

  const handleTaskAdd = () => {
    Keyboard.dismiss()
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
    storageService.setItem('tasks', newTask)
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
            storageService.setItem('tasks', newTask)
          },
        },
      ]
    )
  }

  const clearTasks = () => {
    if(tasks.length > 0) {
      Alert.alert('Limpar lista de Tarefas', 'Esta ação apagara todas as tarefas da lista!',
      [
        {
          text: "Não",
          style: "cancel",
        },
        {
          text: "Sim",
          onPress: () => {
            storageService.removeItem('tasks')
            setTasks([])
          },
        },
      ]
    )
    }
   }

  return {
    tasks,
    setTasks,
    task,
    setTask,
    taskAdd,
    handleTaskAdd,
    handleTaskDone,
    handleTaskDelete,
    clearTasks    
  }
}