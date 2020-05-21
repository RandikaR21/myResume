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
        "The project was conducted in order to fulfill the Software Development Group Project." +
        "In here we attempted to translate realtime camera footage of signs into its respective text." +
        "The prototype was built with Angular, NodeJS, Python and Flask with MongoDB as a database.",
      image:"assets/apeHanda.PNG",
    },
    {
      name:"Westminster Rental Manager",
      overlay:"",
      description:"Westminster Rental Manager is GUI/CLI application that can be used by a manager of a vehicle rental." +
        "The project was conducted as a coursework for the Object Oriented Programming Module. " +
        "The application was built with a Angular FrontEnd, a Java BackEnd and a MySQL database. The API was established using Spring Boot",
      image:"assets/apeHanda.PNG",
    },
    {
      name:"Physics Engine for Unity",
      overlay:"3D role playing game",
      description:"is a 3D role playing game built with Unity gaming engine and C# programming language. " +
        "This was a group project for a competition in which my role was to build the movements of the characters.",
      image:"assets/apeHanda.PNG",
    },
    {
      name:"Physics Engine for Unity",
      overlay:"",
      description:"This is a physic engine built for the Unity gaming engine to demonstrate few aspects of physics and mathematics for gaming." +
        " The development was done with Unity and C#",
      image:"assets/apeHanda.PNG",
    },
    {
      name:"Fitness App",
      overlay:"",
      description:"This project is fitness web based mobile app for sprinters that will generate a random location in the map and will track the speed and distance of the sprinter." +
        "To build this I used HTML and Javascript along with the MapBox API.",
      image:"assets/apeHanda.PNG",
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
