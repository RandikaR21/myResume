import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'cv';
  loadComponent : number = 0;
  public color;

  selectedComponent(i : number){
    this.loadComponent=i;
  }

}
