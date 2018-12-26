import { ICardField } from 'atlas-web-components';

export interface IWorkItem {
    dueDate: string;
    performer: string;
    priority: string;
    processName: string;
    rowNum: number;
    taskId: number;
    taskName: string;
    taskStatus: string;
    taskTitle: string;
    timeStarted: string;
    primary: ICardField[];
    secondary: ICardField[];
}
