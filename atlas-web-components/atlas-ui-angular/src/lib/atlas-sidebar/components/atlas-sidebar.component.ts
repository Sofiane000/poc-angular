
import { Component, EventEmitter, Output, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
@Component({
    selector: 'atlas-sidebar',
    templateUrl: './atlas-sidebar.component.html',
    styleUrls: ['./atlas-sidebar.component.css'],
    animations: [
        // Each unique animation requires its own trigger. The first argument of the trigger function is the name
        trigger('rotatedState', [
            state('default', style({ width: 'auto' })),
            state('rotated', style({
                transform: 'rotate(90deg)',
                'transform-origin': 'left top',
                'position': 'absolute',
                top: '0',
                left: '82%',
                'white-space': 'nowrap',
                width: '630px'
            }))
        ])
    ]
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
        this.state = (this.state === 'default' ? 'rotated' : 'default');
        if (this.state === 'default') {
            this.toggleMiniMode.emit(false);
        } else {
            this.toggleMiniMode.emit(true);
        }
    }
    getIconClass() {
        if (this.headerName === 'Tasks') {
            return 'archive';
        } else {
            return 'folder';
        }
    }
}
