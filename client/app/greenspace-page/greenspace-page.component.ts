import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';


import { Greenspace, GreenspacesService } from '../shared';

@Component({
  selector: 'app-greenspace-page',
  templateUrl: './greenspace-page.component.html',
  styleUrls: ['./greenspace-page.component.css']
})
export class GreenspacePageComponent implements OnInit {

  greenspaces$: Observable<Greenspace[]>
  greenspace: Greenspace = <Greenspace>{}

  constructor(
    private route: ActivatedRoute,
    private greenspacesService: GreenspacesService,
  ) { }

  ngOnInit() {
    let slug = null;

    this.greenspaces$ = this.greenspacesService.greenspaces$;

    this.route.params.subscribe(params => {
      slug = params.slug;
    }).unsubscribe();

    //this.greenspacesService.loadGreenspaces();

    
    this.greenspaces$
      .subscribe(res => res.forEach(greenspace => {
        if(greenspace.slug === slug){
          this.greenspace = greenspace;
        }
      }));
    
    
    //this.greenspacesService.getGreenspaceBySlug(slug);
    
  }


}
