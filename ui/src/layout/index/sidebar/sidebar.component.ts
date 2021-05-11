import { IndexService } from './../index.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { XMenuNode } from '@ng-nest/ui';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class SidebarComponent implements OnInit {
  data: Observable<XMenuNode[]> = of(this.index.menus);
  constructor(private index:IndexService ) {}

  ngOnInit(): void {}
}