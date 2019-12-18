import {animate, state, style, transition, trigger} from '@angular/animations';

export const FunAnimation = trigger('rowsAnim', [
  state(
    'smaller',
    style({
      transform:  'translate(0%)'
    })
  ),
  state(
    'larger',
    style({
      transform:  'translate(100%)'
    })
  ),
  transition('smaller <=> larger', animate('1000ms ease-out'))
]);
