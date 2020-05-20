import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  faCoffee = faCoffee;
  constructor() {
  }

  ngOnInit() {
  }

  imageSrc="assets/SELF.jpg";


}
