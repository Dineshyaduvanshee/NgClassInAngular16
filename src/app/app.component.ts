import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to Indicosmic.com';
users = [
  'Dinesh',
  'Dinesh Kumar',
  'Dinesh Kumar Yadav',
  'Dineshyaduvanshee',
  'pavan',
  'devesh',
  'gupta',
  'tiwari'
]
getCSSClass(flag: string){
  let cssclass;
  if(flag === "mode"){
    cssclass = {
      'one':true,
      'two':false,
    }
  }else{
    cssclass = {
      'one':false,
      'two':true,
    }
  }
  return cssclass;
}
}
