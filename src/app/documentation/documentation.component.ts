import { Component, OnInit } from '@angular/core';
import {allDocumentation} from './plugins/all-documentation';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss']
})
export class DocumentationComponent implements OnInit {
  documentations = allDocumentation;

  constructor() { }

  ngOnInit() {
  }

}
