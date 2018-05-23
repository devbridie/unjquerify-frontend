import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-dual-pane-comparison',
  templateUrl: './dual-pane-comparison.component.html',
  styleUrls: ['./dual-pane-comparison.component.scss']
})
export class DualPaneComparisonComponent implements OnInit {
  original: string;
  @Input()
  map: { sourcesContent: string; };
  @Input()
  transformed: string;

  constructor() { }

  ngOnInit() {
    this.original = this.map.sourcesContent;
  }

}
