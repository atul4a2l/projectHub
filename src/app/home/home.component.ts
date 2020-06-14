import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {AppSettings} from '../app.settings'
import { ContactDialogComponent } from '../shared/contact-dialog/contact-dialog.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  technologyImage: any
  commonTechnologies = [
    {
      name: 'Java'
    },
    {
      name: 'PHP'
    },
    {
      name: 'HTML JS CSS'
    },
    {
      name: 'C, C++'
    }
  ]
  trendingTechnologies = [
    {
      name: 'Angular',
      Description: "Learn one way to build applications with Angular and reuse your code and abilities to build apps for any deployment target. For web, mobile web, native mobile and native desktop."
    },
    {
      name: 'python',
      Description: "Python is a multi-paradigm programming language. Object-oriented programming and structured programming are fully supported, and many of its features support functional programming."
    },
    {
      name: 'React',
      Description: "React is an open-source JavaScript library for building user interfaces. It is maintained by Facebook. React can be used in the development of single-page or mobile applications."
    },
    {
      name: 'Ionic',
      Description: "Free and open source, Ionic offers a library of mobile-optimized UI components, gestures, and tools for building fast, highly interactive apps."
    }
  ]
  constructor(public dialog: MatDialog) { }


  ngOnInit(): void {
    this.technologyImage = AppSettings.technology;
  }

  opencontactDialog() {
    const contactDialogRef = this.dialog.open(ContactDialogComponent, {
      width:'520px',
      // position: {
      //   top: '100px',
      //   right: '200px'
      // }
    });

    contactDialogRef.afterClosed().subscribe(result => {
    });
  }

}
