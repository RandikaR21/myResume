import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  programmingArray=[
    {
      name : 'Python',
      confidence : '80%'
    },
    {
      name : 'Java',
      confidence: '80%'
    },
    {
      name: 'JavaScript',
      confidence: '70%'
    },
    {
      name: 'TypeScript',
      confidence: '70%'
    },
    {
      name : 'SQL',
      confidence: '80%'
    },


  ];

  webDevopArray=[
    {
      name : 'HTML',
      confidence : '90%'
    },
    {
      name : 'CSS',
      confidence: '80%'
    },
    {
      name: 'Angular',
      confidence: '80%'
    }
  ];

  otherSkills=[
    {
      name: 'Adobe Photoshop',
      confidence: '50%'
    },
    {
      name: 'Adobe Illustrator',
      confidence: '40%'
    }
  ];
  interests=[
    'Web Design and Development',
    'UI / UX Designing',
    'Cyber Security',
    'Machine Learning',
    'Game Development'
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
