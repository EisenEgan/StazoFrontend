import { trigger, transition, style, animate } from "@angular/animations";

export const slideStateTrigger = trigger('slideState', [
    // transition(':enter', [
    //     style({
    //         transform: 'translateY(-100%)',
    //     }),
    //     animate('2000ms ease-in', style({
    //         transform: 'translateY(0)'
    //     }))
    // ]),
    // transition(':leave', [
    //     style({
    //         transform: 'translateY(0)',
    //     }),
    //     animate('2000ms ease-out', style({
    //         transform: 'translateY(-100%)'
    //     }))
    // ])
    // state(':enter', style({height: '*'})),
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

// export const remainingListTrigger = trigger('remainingList', [
//     transition('slideUp => slideDown', [
//         style({
//             transform: 'translateY(-100%)'
//         }),
//         animate('2000ms linear', style({
//             transform: 'translateY(0)'
//         }))
//     ]),
//     transition('slideDown => slideUp', [
//         style({
//             transform: 'translateY(0)'
//         }),
//         animate('2000ms linear', style({
//             transform: 'translateY(-100%)'
//         }))
//     ])
// ])