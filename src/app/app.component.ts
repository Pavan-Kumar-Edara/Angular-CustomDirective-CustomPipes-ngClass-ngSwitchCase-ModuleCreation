import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularDirectives';

  sports:Array<string>=["Cricket","Football","Hockey"];
  number:number=5;
  forStyle:boolean=false;
  color:string="red";

 
  isItalic:boolean = true;
  isUnderline:boolean= true;

  //pipes
  name:string="Pavan";
  value:number=54454;
  valueTwo:number=15.5445;
  price:number=199;
  forDate:Date=new Date();

  isUnchanged:boolean=false;
}
