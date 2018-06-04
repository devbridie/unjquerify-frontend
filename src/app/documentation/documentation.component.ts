import { Component, OnInit } from '@angular/core';
import {plugins} from 'unjquerify/build/src/all-plugins';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss']
})
export class DocumentationComponent implements OnInit {
  plugins = plugins;

  constructor() { }

  ngOnInit() {
  }

}
