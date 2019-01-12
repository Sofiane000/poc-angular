import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
    selector: 'atlas-sidebar',
    templateUrl: './atlas-sidebar.component.html',
    styleUrls: ['./atlas-sidebar.component.scss'],
    animations: [
        // Each unique animation requires its own trigger. The first argument of the trigger function is the name
        trigger('rotatedState', [
            state(
                'rotated',
                style({
                    transform: 'rotate(90deg)',
                    'transform-origin': 'left top',
                    position: 'absolute',
                    top: '0',
                    left: '87%',
                    'white-space': 'nowrap',
                    width: '630px',
                })
            ),
        ]),
        trigger('iconRotate', [
            state('default', style({ transform: 'rotate(0deg)' })),
            state(
                'rotated',
                style({
                    transform: 'rotate(-90deg)',
                })
            ),
        ]),
        trigger('arrowRotate', [
            state(
                'default',
                style({
                    transform: 'rotate(0deg)',
                })
            ),
            state(
                'rotated',
                style({
                    transform: 'rotate(90deg)',
                })
            ),
        ]),
    ],
})
export class AtlasSideBarComponent {
    state = 'default';
    @Input() headerName: string;
    @Output() toggleSideBar: EventEmitter<any> = new EventEmitter<any>();
    @Output() toggleMiniMode: EventEmitter<any> = new EventEmitter<any>();

    isOpened: boolean;

    toggle() {
        this.toggleSideBar.emit();
    }

    rotate() {
        this.state = this.state === 'default' ? 'rotated' : 'default';
        if (this.state === 'default') {
            this.toggleMiniMode.emit(false);
        } else {
            this.toggleMiniMode.emit(true);
        }
    }

    getIconClass() {
        if (this.headerName === 'Tasks') {
            return 'fa-inbox';
        } else {
            return 'fa-files-o';
        }
    }
}
