​export interface TaskModel {
    id?: string;
    title: string;
    content: string;
    status: boolean

}

​export interface TaskModelEdit {
 
    edit: boolean,
    task: TaskModel

}
