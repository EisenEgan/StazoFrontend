import { trigger, transition, style, animate, query, stagger } from "@angular/animations";

export const ListAnimationTrigger = trigger('listAnimation', [
    transition('* => *', [ // each time the binding value changes
      query(':leave', [
        stagger(1000, [
          animate('0.5s', style({ opacity: 0 }))
        ])
      ]),
      query(':enter', [
        style({ opacity: 0 }),
        stagger(1000, [
          animate('0.5s', style({ opacity: 1 }))
        ])
      ])
    ])
  ])