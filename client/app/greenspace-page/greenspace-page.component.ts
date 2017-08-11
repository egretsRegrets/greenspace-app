import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-greenspace-page',
  templateUrl: './greenspace-page.component.html',
  styleUrls: ['./greenspace-page.component.css']
})
export class GreenspacePageComponent implements OnInit, OnDestroy {

  slug: string;
  sub: any;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.slug = params['slug'];
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
