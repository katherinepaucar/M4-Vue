<template>
    <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
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
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" v-for="task in data" :key="task.id">
                    <td class="px-6 py-4">
                        {{ task.title }}
                    </td>
                    <td class="px-6 py-4">
                        {{ task.content }}
                    </td>
                    <td class="px-6 py-4">

                        <div class="flex items-center">
                            <input id="checked-checkbox" type="checkbox" value={{task.status}} v-model="task.status"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="checked-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            </label>
                        </div>


                    </td>
                    <td class="px-6 py-4">

                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">
import type { TaskModel } from '~/types/task.model';


const taskService = useTask();
const data = ref(taskService.listTask);


</script>