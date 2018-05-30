import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {BehaviorSubject} from 'rxjs/index';
import {ExampleRetrieverService} from '../../example-retriever.service';
import {switchMap} from 'rxjs/operators';

type UploadType = 'Example' | 'URL' | 'Input' | 'Upload';

@Component({
  selector: 'app-source-select',
  templateUrl: './source-select.component.html',
  styleUrls: ['./source-select.component.scss']
})
export class SourceSelectComponent {
  uploadTypes: UploadType[] = ['Example', 'Input', /* 'URL', 'Upload'*/];
  selectedUploadType$ = new BehaviorSubject(this.uploadTypes[0]);

  examples = ['simple', 'characterCounter'];
  selectedExample$ = new BehaviorSubject(this.examples[0]);
  exampleCode$ = this.selectedExample$.pipe(switchMap(name => this.exampleRetriever.getExample(name)));

  inputPlaceholder = localStorage.getItem('input') || '';

  constructor(private router: Router, private exampleRetriever: ExampleRetrieverService) {
  }

  submitText(text: string) {
    localStorage.setItem('input', text);
    this.router.navigate(['result', 'input']);
  }

}
