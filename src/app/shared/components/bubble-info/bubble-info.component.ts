import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bubble-info',
  templateUrl: './bubble-info.component.html',
  styleUrls: ['./bubble-info.component.scss']
})
export class BubbleInfoComponent {

  @Input() text: string = '';
  @Input() tooltipText: string = '';

}
