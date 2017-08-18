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

  greenspaceTags = ['backyard', 'front yard', 'full yard', 'large plot', 'micro plot'];

  map: any;

  constructor(
    private greenspacesService: GreenspacesService
  ) { }

  ngOnInit() {
    this.form.tags = [];
    this.form.photos = [];

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
          if (val.toLowerCase() === fieldValue.toLowerCase()){
            return fieldValIsDuplicate = true;
          }
        }
      );
    }

    return fieldValIsDuplicate;
  }


  checkFieldErrors(fieldName, fieldValue) {
    function atLeastFiveChars(input){
      let regEx = /[A-Za-z]{3,5}/;
      return regEx.test(input);
    }
    if (atLeastFiveChars(fieldValue)) {
      return this.formErrors[fieldName] = this.fieldValDuplicate(fieldName, fieldValue);
    } else{
      return this.formErrors[fieldName] = 'short';
    }
  }

  checkFormErrors() {
    Object.keys(this.formErrors).forEach(
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

  checkBoxAction(event) {
    if (event.target.checked){
      return this.form.tags.push(event.target.value);
    } else {
      const targetIndex = this.form.tags.indexOf(event.target.value);
      return this.form.tags = [].concat(
        ...this.form.tags.slice(0, targetIndex),
        ...this.form.tags.slice(targetIndex+1)
      );
    }
  }

  assignAddress() {
    setTimeout(() => {
      let locObj = Object.assign({},
          {address: (<HTMLInputElement>document.getElementById('greenspaceAddress')).value},
          {coordinates: [
            parseFloat((<HTMLInputElement>document.getElementById('greenspaceAddressLng')).value),
            parseFloat((<HTMLInputElement>document.getElementById('greenspaceAddressLat')).value)
          ]}
        );
      this.form.location = locObj;
    }, 700);
  }
  
  addPhoto(event) {
    // just a test returning string
    this.form.photos.push(event.target.value);
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
