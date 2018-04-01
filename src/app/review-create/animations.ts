import { trigger, transition, style, animate } from "@angular/animations";

export const slideStateTrigger = trigger('slideState', [
    transition(':enter', [
        style({
            height: 0,
        }),
        animate('300ms ease-in', style({
            height: '*'
        }))
    ]),
    transition(':leave', [
        style({
            height: '*'
        }),
        animate('300ms ease-in', style({
            height: 0
        }))
    ])
])