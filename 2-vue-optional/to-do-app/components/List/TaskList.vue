<template>
    <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-center  text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        Título
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Contenido
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Estado
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Acciones
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="bg-white text-center border-b dark:bg-gray-800 dark:border-gray-700" v-for="task in data"
                    :key="task.id">
                    <td class="px-6 py-4">
                        {{ task.title }}
                    </td>
                    <td class="px-6 py-4">
                        {{ task.content }}
                    </td>
                    <td class="px-6 py-4">

                        <div class="flex items-center justify-center">
                            <input id="checked-checkbox" type="checkbox" v-model="task.status" @input="updateStatus($event, task)"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="checked-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            </label>
                        </div>


                    </td>
                    <td class="px-6 py-4">
                        <button @click="deleteItem(task)" aria-label="borrar tarea">
                            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd"
                                    d="M8.6 2.6A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4c0-.5.2-1 .6-1.4ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z"
                                    clip-rule="evenodd" />
                            </svg>
                        </button>
                        <button @click="$emit('edit', { edit: true, task })" aria-label="editar tarea" class="pl-3">
                            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="m14.3 4.8 2.9 2.9M7 7H4a1 1 0 0 0-1 1v10c0 .6.4 1 1 1h11c.6 0 1-.4 1-1v-4.5m2.4-10a2 2 0 0 1 0 3l-6.8 6.8L8 14l.7-3.6 6.9-6.8a2 2 0 0 1 2.8 0Z" />
                            </svg>
                        </button>


                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">
import type { TaskModel } from '~/types/task.model';


const taskService = useTask();

const data = computed(() => taskService.listTask);

const updateStatus = (event: any, task: TaskModel) => {
    // console.log(event.target.checked);
    task.status = event.target.checked;
    taskService.editTask(task);
}

const deleteItem = (task: TaskModel) => {
    if (!task.id) return;
    taskService.deleteTask(task.id);

}
const $emit = defineEmits(['edit']);

</script>