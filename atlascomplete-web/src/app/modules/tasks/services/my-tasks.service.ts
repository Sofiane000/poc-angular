import { Injectable } from '@angular/core';
import { DataAccessFactory, DataAccessService } from 'atlas-web-services';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IWorkItem } from '../models/work-item';
@Injectable()
export class MyTasksService {
    dataAccess: DataAccessService;

    constructor(dataAccessFactory: DataAccessFactory) {
        this.dataAccess = dataAccessFactory.getService('bpm.workitems');
    }

    getWorkItems(type: string): Observable<IWorkItem[]> {
        return this.dataAccess.get(`${type}`).pipe(
            map((response) => {
                return response.body.data;
            })
        );
    }

    getFieldsForItems(items: IWorkItem[]) {
        const primaryProps = ['processName', 'taskId', 'timeStarted', 'dueDate'];
        const secondaryProps = ['priority', 'taskStatus'];
        items.map((item) => {
            if (!item.primary || !item.secondary) {
                item.primary = [];
            }
            if (!item.secondary) {
                item.secondary = [];
            }
            primaryProps.forEach((field) => {
                if (field in item) {
                    item.primary.push(this.getFieldObject(field, item));
                }
            });
            secondaryProps.forEach((field, index) => {
                if (field in item) {
                    item.secondary.push(this.getFieldObject(field, item));
                }
                if (index === 1) {
                    item.secondary.push({
                        label: 'Due:',
                        value: new Date(item.dueDate).toLocaleString(),
                        iconClass: 'fa fa-calendar-minus-o',
                    });
                }
            });
        });
    }

    getFieldObject(fieldName, item: IWorkItem) {
        switch (fieldName) {
            case 'processName':
                return {
                    label: 'Workflow:',
                    value: item.processName,
                    iconClass: '',
                };
            case 'taskId':
                return {
                    label: 'Workflow ID:',
                    value: item.processName,
                    iconClass: '',
                };
            case 'timeStarted':
                return {
                    label: 'Created:',
                    value: new Date(item.timeStarted).toLocaleString(),
                    iconClass: 'fa-calendar-plus-o',
                };
            case 'dueDate':
                return {
                    label: 'Time Remaining:',
                    value: new Date(item.dueDate).toLocaleString(),
                    iconClass: 'fa-hourglass-end',
                };
            case 'priority':
                return {
                    label: 'Priority:',
                    value: item.priority,
                    iconClass: 'fa-hourglass-end',
                };
            case 'taskStatus':
                return {
                    label: 'Status:',
                    value: item.taskStatus === 'I_ASSIGNED' ? 'assigned' : 'available',
                };
            case 'dueDate':
                return {
                    label: 'Due:',
                    value: new Date(item.dueDate).toLocaleString(),
                    iconClass: 'fa fa-calendar-minus-o',
                };
        }
    }
}
