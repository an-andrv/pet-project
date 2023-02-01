import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';

import { BubbleInfoComponent } from './bubble-info.component';

@NgModule({
  declarations: [BubbleInfoComponent],
  exports: [BubbleInfoComponent],
  imports: [CommonModule, MatMenuModule ],
})
export class BubbleInfoModule {}
