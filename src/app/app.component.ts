import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'welcome to angular';
  app="MOBILE AND WEB APPLICATIONS"

  value1:number=87.28941
  value2:number=562.7777

  d1:Date | undefined;
  d2:Date | undefined;

  salary:number=758920.32

  constructor(){}

  ngOnInit(): void {
    this.d1=new Date(2022,4,23)
    this.d2=new Date(2022,4,23,18,33,46)
    
  }
}
