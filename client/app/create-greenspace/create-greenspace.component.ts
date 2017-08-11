import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Greenspace, GreenspacesService } from '../shared';
import { AppStore } from '../app-store';

@Component({
  selector: 'app-create-greenspace',
  templateUrl: './create-greenspace.component.html',
  styleUrls: ['./create-greenspace.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateGreenspaceComponent {
  
  greenspaces$: Observable<Greenspace[]>;

  form: Greenspace = {
    _id: undefined,
    name: ""
  }; 

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
    function nameIsNew(newGreenspace, existingGreenspaces){
      let nameConflict = false;

      existingGreenspaces
        .map(res => {
          return res.reduce((arr, entity) => {
            return arr.concat(entity.name);
          }, []);
        })
        .subscribe(names=> compareNames(names))
        .unsubscribe();

      function compareNames(names: string[]) {
        names.forEach(name => {
          if (name === newGreenspace.name){
            console.log('uh oh, there is already a Greenspace with this name');
            nameConflict = true;
          }
        });
      }
      
      return nameConflict;
    }
    
    if (nameIsNew(greenspace, this.greenspaces$)){
      console.error('name conflict occurred');
    } else{
      this.greenspacesService.createGreenspaces(greenspace);
      console.log(`${greenspace.name} created!`);
    }
  }

}
