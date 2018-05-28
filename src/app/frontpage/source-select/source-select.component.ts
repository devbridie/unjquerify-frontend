import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-source-select',
  templateUrl: './source-select.component.html',
  styleUrls: ['./source-select.component.scss']
})
export class SourceSelectComponent implements OnInit {

  selected: 'example' | 'url' | 'input' = 'example';

  constructor() { }

  ngOnInit() {
  }

  setSelected(selected: 'example' | 'url' | 'input') {
    this.selected = selected;
  }

}
