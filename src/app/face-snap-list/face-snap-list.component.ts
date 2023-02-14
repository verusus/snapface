import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit{

  faceSnaps!: FaceSnap[]

  constructor(private faceSnapsService: FaceSnapsService) {}

  ngOnInit(): void {
    // let obs = this.faceSnapsService.getAllFaceSnaps()
    // obs.subscribe((data) => {
    //   data.forEach((v: any) => {
    //     v.mode = 'modifié'
    //   })
    //   this.faceSnaps = data
    // })

    this.faceSnapsService.getAllFaceSnaps().subscribe((data) => {
      data.forEach((v: any) => {
        v.mode = 'modifié'
      })
      this.faceSnaps = data
    })
  }
}
