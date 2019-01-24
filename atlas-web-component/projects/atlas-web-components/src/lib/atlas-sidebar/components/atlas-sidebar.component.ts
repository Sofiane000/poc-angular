import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'atlas-sidebar',

    templateUrl: './atlas-sidebar.component.html',

    styleUrls: ['./atlas-sidebar.component.scss'],

    animations: [
        // Each unique animation requires its own trigger. The first argument of the trigger function is the name

        trigger('toolbarSmallState', [
            state(
                'rotated',

                style({
                    display: 'flex',

                    height: '100%',
                })
            ),
        ]),

        trigger('toolbarRowSmallState', [
            state(
                'rotated',

                style({
                    display: 'flex',

                    'flex-direction': 'column',

                    flex: 1,

                    'margin-top': '15px',
                })
            ),
        ]),

        trigger('sidebarRowSmallState', [
            state(
                'rotated',

                style({
                    display: 'flex',

                    'flex-direction': 'column',

                    'align-items': 'start',

                    flex: 1,
                })
            ),
        ]),

        trigger('sidebarButtonSmallState', [
            state(
                'rotated',

                style({
                    transform: 'scaleX(-1)',

                    'margin-left': '-11px',
                })
            ),
        ]),

        trigger('taskHeaderSmallState', [
            state(
                'rotated',

                style({
                    margin: '15px 0px 0px -5px',

                    'writing-mode': 'vertical-lr',
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
