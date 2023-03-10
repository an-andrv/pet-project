import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LocalizedDatePipe } from './pipes/localized-date.pipe';
import { StopPropagationDirective } from './directives/stop-propagation.directive';
import { BubbleInfoModule } from './components/bubble-info/bubble-info.module';


@NgModule({
 imports: [ 
    CommonModule,
    BubbleInfoModule
  ],
 declarations: [ 
    LocalizedDatePipe,
    StopPropagationDirective
  ],
 exports: [
    CommonModule,
    FormsModule,
    LocalizedDatePipe
  ]
})
export class SharedModule { }
