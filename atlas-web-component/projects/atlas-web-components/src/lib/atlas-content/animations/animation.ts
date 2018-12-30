import {
    animate,
    animateChild,
    group,
    query,
    stagger,
    style,
    transition,
    trigger,
} from '@angular/animations';

export const routerTransition = trigger('routerTransition', [
    transition('* <=> *', [
        /* 2 */ group([
            // block executes in parallel
            query(
                ':enter',
                [
                    style({ transform: 'translateX(100%)', opacity: 1 }),
                    animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' })),
                ],
                { optional: true }
            ),
            query(
                ':leave',
                [
                    style({ transform: 'translateX(0%)', opacity: 0 }),
                    animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' })),
                ],
                { optional: true }
            ),
        ]),
    ]),
]);
