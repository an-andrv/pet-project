import { animate, AnimationTriggerMetadata, state, style, transition, trigger } from "@angular/animations";

export const ANIMATION_FLIP: AnimationTriggerMetadata = trigger('flip', [
  state('false', style({ transform: 'rotateY(0deg) translateZ(1px)' })),
  state('true', style({ transform: 'rotateY(180deg) translateZ(1px)' })),
  transition('false <=> true', [animate('500ms')]),
]);

export const ANIMATION_ACCORDION: AnimationTriggerMetadata = trigger('accordion', [
  transition(':enter', [
    style({ overflow: 'hidden', height: '0px', opacity: '0' }),
    animate('.5s ease-out', style({ overflow: 'hidden', height: '*', opacity: '1' })),
  ]),
  transition(':leave', [
    style({ overflow: 'hidden', height: '*', opacity: '1' }),
    animate('.5s ease-in', style({ overflow: 'hidden', height: '0px', opacity: '0' })),
  ]),
]);
