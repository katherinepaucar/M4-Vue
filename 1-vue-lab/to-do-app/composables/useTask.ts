import {defineStore} from 'pinia';
import type { TaskModel } from '~/types/task.model';
const generateIdTask = () => {
    const id = Math.random().toString(36).substring(2, 15);
    return id;
  }
  
export const useTask = defineStore('task', () => {
    const listTask = ref<TaskModel[]>([]);
    const addTask  = (task: TaskModel) => {
        console.log('task', task);
        task.id = generateIdTask();
        listTask.value.push(task);
        console.log('list', listTask.value);
    }
    const getList=() => {
        return listTask;
    }

    return {
        listTask,
        addTask
    }

},

)