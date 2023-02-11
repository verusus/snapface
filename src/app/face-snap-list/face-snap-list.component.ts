import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit{

  faceSnaps!: FaceSnap[]

  ngOnInit(): void {
    this.faceSnaps = [
      {
        title: 'Archibald',
        description: 'Mon meilleur ami depuis tout petit !',
        imageUrl: 'https://cdn.pixabay.com/photo/2014/12/24/05/02/drop-of-water-578897_1280.jpg',
        createdDate: new Date(),
        snaps: 250,
        location: "paris"
      },
      {
        title: 'bird',
        description: 'the best bird !',
        imageUrl: 'https://cdn.pixabay.com/photo/2023/01/30/20/02/bird-7756521_1280.jpg',
        createdDate: new Date(),
        snaps: 0,
        location: "maroc"
      },
      {
        title: 'Archibald',
        description: 'Mon meilleur ami depuis tout petit !',
        imageUrl: 'https://cdn.pixabay.com/photo/2014/12/24/05/02/drop-of-water-578897_1280.jpg',
        createdDate: new Date(),
        snaps: 6,
        location: "paris"
      },
      {
        title: 'bird',
        description: 'the best bird !',
        imageUrl: 'https://cdn.pixabay.com/photo/2023/01/30/20/02/bird-7756521_1280.jpg',
        createdDate: new Date(),
        snaps: 0,
        location: "maroc"
      }
      
    ]
  }
  
}
