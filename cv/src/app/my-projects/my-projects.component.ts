import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.css']
})
export class MyProjectsComponent implements OnInit {
  myProjects=[
    {
      name:"Ape හධ",
      overlay:"The Voice of the Voiceless",
      description:"Ape හධ is an approach to translate Sinhale Sign Language to Sinhala text using image classification." +
        " In here we attempted to translate realtime camera footage of signs into its respective text." +
        " The prototype was built with Angular, NodeJS, Python and Flask with MongoDB as a database.",
      image:"assets/apeHanda.PNG",
    },
    {
      name:"Westminster Rental Manager",
      overlay:"",
      description:"Westminster Rental Manager is GUI/CLI application that can be used by a manager of a vehicle rental." +
        " The application was built with a Angular FrontEnd, a Java BackEnd and a MySQL database. The API was established using Spring Boot",
      image:"assets/oop.PNG",
    },
    {
      name:"3D role playing game",
      overlay:"",
      description:"This is a 3D role playing game built with Unity gaming engine and C# programming language. " +
        " This was a group project for the game development competition in which my role was to build the movements of the characters.",
      image:"assets/gdc.PNG",
    },
    {
      name:"Physics Engine for Unity",
      overlay:"",
      description:"This is a physic engine built for the Unity gaming engine to demonstrate few aspects of physics and mathematics for gaming." +
        " The development was done with Unity and C#",
      image:"assets/maths.PNG",
    },
    {
      name:"4 Man Squad Gaming",
      overlay:"",
      description:"4 Man Squad Gaming that has the latest games and news in the market." +
        " 4 Man Squad Gaming is fully functional website that delivers latest games and news to its viewers." +
        " The project was built with HTML, Javascript and CSS",
      image:"assets/4manSquad.PNG",
    },
    {
      name:"Kids at Work Day",
      overlay:"",
      description:"Kids at work day was the event organised by the summer interns at attune consulting as the final project." +
        " This was an event organised for the kids of the employees at attune",
      image:"assets/kidsatwork.JPG",
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
