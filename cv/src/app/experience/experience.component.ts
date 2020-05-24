import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  competitions=[
    {
      "name" : "IEEE Xtreme V13.0",
      "rank" : "Gobal rank - 603, Country rank - 39"
    },
    {
      "name" : "Google Hashcode 2020",
      "rank" : "participant"
    },
    {
      "name" : "Aces Coders V8.0",
      "rank" : "participant"
    },
    {
      "name" : "SLIIT Codefest",
      "rank" : "semi-finalist"
    },
    {
      "name" : "IEEE Coderally",
      "rank" : "participant"
    }

  ]

}
