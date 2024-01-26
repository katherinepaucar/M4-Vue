<template>
  <NewTask/>
  <TaskList/>
</template>

<script setup lang="ts">
import TaskList from './List/TaskList.vue';

import NewTask from './List/NewTask.vue';

defineProps<{
  
}>()
</script>