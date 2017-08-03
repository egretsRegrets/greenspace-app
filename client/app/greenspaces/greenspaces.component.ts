import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Greenspace, GreenspacesService } from '../shared';

@Component({
  selector: 'app-greenspaces',
  templateUrl: './greenspaces.component.html',
  styleUrls: ['./greenspaces.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GreenspacesComponent implements OnInit {
  greenspaces$: Observable<Greenspace[]>;
  constructor(
    private greenspacesService: GreenspacesService
  ) {}

  ngOnInit() {
    this.greenspaces$ = this.greenspacesService.greenspaces$;
    this.greenspacesService.loadGreenspaces();
  }

}
