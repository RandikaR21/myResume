import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  oLevel= [
    {
      subject: 'Mathematics',
      grade: 'A*'
    },
    {
      subject: 'Computer Science',
      grade: 'A*'
    },
    {
      subject: 'Biology',
      grade: 'A*'
    },
    {
      subject: 'Environmental Management',
      grade: 'A*'
    },
    {
      subject: 'Physics',
      grade: 'A'
    },
    {
      subject: 'Chemistry',
      grade: 'A'
    },
    {
      subject: 'English Language',
      grade: 'A'
    },
    {
      subject: 'Religious Knowledge',
      grade: 'A'
    }
  ];

  aLevels=[
    {
      subject: 'Pure Maths and Mechanics',
      grade: 'A*'
    },
    {
      subject: 'Physics',
      grade: 'A*'
    },
    {
      subject: 'Chemistry',
      grade: 'A'
    }
  ];

  uniFirstYear=[
    {
      subject: 'Programing Principles 01',
      marks: '97'
    },
    {
      subject: 'Programing Principles 02',
      marks: '82'
    },
    {
      subject: 'Mathematics for Computing',
      marks: '100'
    },
    {
      subject: 'Computer System Fundamentals',
      marks: '86'
    },
    {
      subject: 'Computer Science Practice',
      marks: '77'
    },
    {
      subject: 'Web Design and Development',
      marks: '85'
    }
  ];

  uniSecondYear=[
    {
      subject: 'Software Development Group Project',
      marks: 'Pending'
    },
    {
      subject: 'Algorithms: Theory and Implementation',
      marks: 'Pending'
    },
    {
      subject: 'Client Server Architecture',
      marks: 'Pending'
    },
    {
      subject: 'Object Oriented Programming',
      marks: 'Pending'
    },
    {
      subject: 'Database Systems',
      marks: 'Pending'
    },
    {
      subject: 'Applied Maths and Physics for Games',
      marks: 'Pending'
    },
  ];

  toggleResults =['View Results' , "View Results" , "View Results"];
  toView=[false,false,false];

  constructor() {
  }

  ngOnInit() {
  }

  viewResults(index:number){
    if (this.toView[index]==true){
      this.toView[index]=false;
      this.toggleResults[index]="View Results"
    }else{
      this.toView[index]=true;
      this.toggleResults[index]="Hide Results"
    }

    // if (this.toggleResults=="View Results"){
    //   this.toggleResults="Hide Results";
    //   this.toView=index;
    // }else{
    //   this.toggleResults="View Results";
    //   this.toView=null;
    // }

  }
}
