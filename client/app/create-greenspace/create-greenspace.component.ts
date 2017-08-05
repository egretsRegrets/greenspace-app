import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Greenspace, GreenspacesService } from '../shared';

@Component({
  selector: 'app-create-greenspace',
  templateUrl: './create-greenspace.component.html',
  styleUrls: ['./create-greenspace.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateGreenspaceComponent {
  greenspaces$: Observable<Greenspace[]>; 
  constructor(
    private greenspacesService: GreenspacesService
  ) { }

  ngOnInit() {
    // we need to load the greenspaces so that we can compare
      // new greenspace details against existing greenspaces
    this.greenspaces$ = this.greenspacesService.greenspaces$;
    this.greenspacesService.loadGreenspaces();
  }

  saveGreenspace(greenspace: Greenspace) {
    this.greenspacesService.createGreenspaces(greenspace);
  }

}
