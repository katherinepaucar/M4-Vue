<template>
  <NewTask :editTask="taskData" />
  <TaskList @edit="onMyEditEvent($event)"/>
</template>

<script setup lang="ts">
import TaskList from './List/TaskList.vue';
import NewTask from './List/NewTask.vue';
import type { TaskModelEdit } from '~/types/task.model';
const taskData = ref <TaskModelEdit>({} as TaskModelEdit);
const onMyEditEvent = ($event: any) =>{
// console.log('event',$event);
taskData.value = $event;
 
}
</script>