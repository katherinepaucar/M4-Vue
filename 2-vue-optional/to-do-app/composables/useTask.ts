import { defineStore } from "pinia";
import type { TaskModel } from "~/types/task.model";
const generateIdTask = () => {
  const id = Math.random().toString(36).substring(2, 15);
  return id;
};

export const useTask = defineStore(
  "task",
  () => {
    const listTask = ref<TaskModel[]>([]);
    const addTask = (task: TaskModel) => {
      task.id = generateIdTask();
      listTask.value.push(task);
    };
    const deleteTask = (id: string) => {
      listTask.value = listTask.value.filter((task) => task.id !== id);
    };

    const editTask = (newData: TaskModel) => {
      // console.log("newData editTask", newData);
      if (newData && newData.id) {
        listTask.value
          .filter((task) => task.id === newData.id)
          .map((task) => {
            task.title = newData.title,
            task.content = newData.content,
            task.status = newData.status;
          });
      }
      console.log('listTask', listTask.value);
    };

    return {
      listTask,
      addTask,
      deleteTask,
      editTask,
    };
  },
  {
    persist: true,
  }
);
