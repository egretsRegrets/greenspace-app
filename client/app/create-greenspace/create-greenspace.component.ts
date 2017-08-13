import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Greenspace, GreenspacesService } from '../shared';
import { AppStore } from '../app-store';

@Component({
  selector: 'app-create-greenspace',
  templateUrl: './create-greenspace.component.html',
  styleUrls: ['../app.component.scss', './create-greenspace.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateGreenspaceComponent {
  
  greenspaces$: Observable<Greenspace[]>;

  form: Greenspace = <Greenspace>{};
  
  // form error state

  formErrors = {
    name: false
  };

  // form submission state
  formSubmission = {
    attempted: false,
    failed: false,
    success: false,
    successMsg: 'Congratulations, youv\'ve created a Greenspace!',
    failedMsg: 'It looks like your submission contains some errors.'
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

  fieldValDuplicate(fieldName, fieldValue) {
    let fieldValIsDuplicate = false

    this.greenspaces$
      .map(res => res.reduce(
        (arr, entity) => {
          return arr.concat(entity[fieldName]);
        }, []
      )).subscribe(
        existingVals => compareVals(existingVals)
      );
    
    function compareVals(existingVals) {
      existingVals.forEach(
        val => {
          if (val === fieldValue){
            return fieldValIsDuplicate = true;
          }
        }
      );
    }

    return fieldValIsDuplicate;
  }


  checkFieldErrors(fieldName, fieldValue) {
    if (fieldValue !== undefined && fieldValue.length > 1) {
      return this.formErrors[fieldName] = this.fieldValDuplicate(fieldName, fieldValue);
    } else{

    }
    return this.formErrors[fieldName] = 'empty';
  }

  checkFormErrors() {
    Object.keys(this.form).forEach(
      key => this.checkFieldErrors(key, this.form[key])
    );
    function thereAreErrors(errorObj){
      let keys = Object.keys(errorObj);
      for(let i = 0; i < keys.length; i++){
        if (errorObj[keys[i]] !== false){
          return true;
        }
      }
    }

    if(thereAreErrors(this.formErrors)){
      return true;
    }
    return false;
  }

  
  saveGreenspace(greenspace: Greenspace) {
    if(!this.checkFormErrors()){
      this.greenspacesService.createGreenspaces(greenspace);
      if (this.formSubmission.failed){
        this.formSubmission.failed = false;
      }
      this.formSubmission.attempted = true;
      return this.formSubmission.success = true;
    } else{
      this.formSubmission.attempted = true;
      return this.formSubmission.failed = true;
    }
    
  }


}
