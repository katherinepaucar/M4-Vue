<template>
  <form   @submit.prevent="onSubmit" class="max-w-sm mx-auto">
    <div class="mb-5 mt-5">
        <h1 class="text-blue-600" v-if="props && !props.editTask.edit">Añade los datos de tu tarea:</h1>
        <h1 class="text-green-600" v-else>Edita los datos de la tarea:</h1>
    </div>
 
        <div class="mb-5">
            <label for="title"  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Título</label>
            <input type="title" id="title"
                v-model="title"
                minlength="5"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Título de la tarea" required>
        </div>
        <div class="mb-5">

            <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Descripción</label>
            <textarea id="message" rows="4"
            v-model="content"
            minlength="5"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Escribe la descripción de la tarea..."></textarea>
        </div>
        <div class="flex items-start mb-5">

            <button type="submit"  aria-label="agregar tarea"
            :class="[props.editTask && props.editTask.edit ? 'bg-green-700 hover:bg-green-800 focus:ring-green-300' : '']"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
             {{ props.editTask && props.editTask.edit ? 'Editar': 'Agregar' }}
            </button>

            <a class="pl-4 text-dark" v-if="props && props.editTask.edit" @click="backAddTak">Volver a modo agregar</a>
            
            
        </div>
    </form>
</template>

<script setup lang="ts">
import type { TaskModel, TaskModelEdit } from '~/types/task.model';


const props = defineProps<{
  editTask: TaskModelEdit
}>()


const title = ref('');
const content = ref('');
const taskService = useTask();

const onSubmit = () => {
    if(!title && !content) {
        return;
    }
    console.log(' onSubmit props.editTask', props.editTask);

    if(props.editTask && props.editTask.edit){
        //editamos tarea
        const newData: TaskModel = {
            id: props.editTask.task.id,
            title: title.value,
            content: content.value,
            status: props.editTask.task.status,
        }
        
        taskService.editTask(newData);

    }else{
        //Añadimos tarea
            taskService.addTask({
            title: title.value,
            content: content.value,
            status: false,
        });
        title.value = '';
        content.value = '';
    }

    
}
watchEffect ( () => {
        title.value = props.editTask?.task?.title;
        content.value = props.editTask?.task?.content;
        // console.log('props.editTask', props.editTask);
})
const backAddTak= () => {
    props.editTask.edit = false;
    props.editTask.task = {} as TaskModel;
    title.value = '';
    content.value = '';
}
</script>