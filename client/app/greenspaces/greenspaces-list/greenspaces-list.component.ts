import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Greenspace } from '../../shared';

@Component({
  selector: 'app-greenspaces-list',
  templateUrl: './greenspaces-list.component.html',
  styleUrls: ['./greenspaces-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GreenspacesListComponent {
  @Input() greenspaces: Greenspace[];

}
