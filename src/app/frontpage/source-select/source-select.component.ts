import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

type UploadType = 'Example'| 'URL'| 'Input'| 'Upload';

@Component({
  selector: 'app-source-select',
  templateUrl: './source-select.component.html',
  styleUrls: ['./source-select.component.scss']
})
export class SourceSelectComponent implements OnInit {
  uploadTypes = ['Example', 'Input', 'URL', 'Upload'];
  examples = ['simple', 'characterCounter'];
  selected = this.uploadTypes[0];

  inputPlaceholder = localStorage.getItem('input') || '';

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  setSelected(selected: UploadType) {
    this.selected = selected;
    return false;
  }

  submitText(text: string) {
    localStorage.setItem('input', text);
    this.router.navigate(['result', 'input']);
  }

}
