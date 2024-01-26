​export interface TaskModel {
    id?: string;
    title: string;
    content: string;
    status: boolean

}
export enum Status {
    completed = 1,
    pending = 2
}
