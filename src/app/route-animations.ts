import { trigger, transition, style, animate, query, group } from '@angular/animations';

export const fadeAnimation = trigger('fadeAnimation', [
  transition('* => *', [
    style({ opacity: 0 }),
    animate('0.5s ease-in-out', style({ opacity: 1 }))
  ])
]);

export const slideInAnimation = trigger('routeAnimations', [
  // Transições para entrar/sair do template
  transition('landing => template', slideRight()),
  transition('template => landing', slideLeft()),
  
  // Transições entre páginas do template
  transition('* => *', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'
      })
    ], { optional: true }),
    query(':enter', [
      style({ 
        opacity: 0,
        transform: 'translateX(100%)' 
      })
    ], { optional: true }),
    query(':leave', [
      style({ 
        opacity: 1,
        transform: 'translateX(0)' 
      })
    ], { optional: true }),
    group([
      query(':leave', [
        animate('0.3s ease-out', style({
          opacity: 0,
          transform: 'translateX(-100%)'
        }))
      ], { optional: true }),
      query(':enter', [
        animate('0.3s ease-out', style({
          opacity: 1,
          transform: 'translateX(0)'
        }))
      ], { optional: true })
    ])
  ])
]);

function slideRight() {
  return [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'
      })
    ], { optional: true }),
    query(':enter', [
      style({ 
        opacity: 0,
        transform: 'translateX(100%)' 
      })
    ], { optional: true }),
    query(':leave', [
      style({ 
        opacity: 1,
        transform: 'translateX(0)' 
      })
    ], { optional: true }),
    group([
      query(':leave', [
        animate('0.3s ease-out', style({
          opacity: 0,
          transform: 'translateX(-100%)'
        }))
      ], { optional: true }),
      query(':enter', [
        animate('0.3s ease-out', style({
          opacity: 1,
          transform: 'translateX(0)'
        }))
      ], { optional: true })
    ])
  ];
}

function slideLeft() {
  return [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'
      })
    ], { optional: true }),
    query(':enter', [
      style({ 
        opacity: 0,
        transform: 'translateX(-100%)' 
      })
    ], { optional: true }),
    query(':leave', [
      style({ 
        opacity: 1,
        transform: 'translateX(0)' 
      })
    ], { optional: true }),
    group([
      query(':leave', [
        animate('0.3s ease-out', style({
          opacity: 0,
          transform: 'translateX(100%)'
        }))
      ], { optional: true }),
      query(':enter', [
        animate('0.3s ease-out', style({
          opacity: 1,
          transform: 'translateX(0)'
        }))
      ], { optional: true })
    ])
  ];
}
