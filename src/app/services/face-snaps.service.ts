import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
    providedIn: 'root'
})
export class FaceSnapsService{
    faceSnaps: FaceSnap[] = [
        {
            id: 1,
            title: 'Archibald',
            description: 'Mon meilleur ami depuis tout petit !',
            imageUrl: 'https://cdn.pixabay.com/photo/2014/12/24/05/02/drop-of-water-578897_1280.jpg',
            createdDate: new Date(),
            snaps: 250,
            location: "paris"
          },
          {
            id: 2,
            title: 'bird',
            description: 'the best bird !',
            imageUrl: 'https://cdn.pixabay.com/photo/2023/01/30/20/02/bird-7756521_1280.jpg',
            createdDate: new Date(),
            snaps: 0,
            location: "maroc"
          },
          {
            id: 3,
            title: 'Archibald',
            description: 'Mon meilleur ami depuis tout petit !',
            imageUrl: 'https://cdn.pixabay.com/photo/2014/12/24/05/02/drop-of-water-578897_1280.jpg',
            createdDate: new Date(),
            snaps: 6,
            location: "paris"
          },
          {
            id: 4,
            title: 'bird',
            description: 'the best bird !',
            imageUrl: 'https://cdn.pixabay.com/photo/2023/01/30/20/02/bird-7756521_1280.jpg',
            createdDate: new Date(),
            snaps: 0,
            location: "maroc"
          }
    ]

    getAllFaceSnaps(): Observable<FaceSnap[]> {
        return of(this.faceSnaps);
    }

    getFaceSnapById(faceSnapId: number): FaceSnap {
        const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if (!faceSnap) {
            throw new Error('FaceSnap not found!');
        } else {
            return faceSnap;
        }
    }

    snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap' ): void {
        const faceSnap = this.getFaceSnapById(faceSnapId);
        snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
    }
}

