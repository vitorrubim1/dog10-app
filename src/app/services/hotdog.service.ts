import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotdogService {

  private hotdogCollection: AngularFirestoreCollection;

  //listar os hots dogs
  private hotdogs: Observable<Object[]>;

  constructor(private db: AngularFirestore) {
    this.hotdogCollection = db.collection('hotdog');

    this.hotdogs = this.hotdogCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(hotdog => {
          let dogTemp = hotdog.payload.doc.data()
          return dogTemp
        })
      })
    )

  }

  //retornar uma promisse
  public addDog(hotdog) {
    return this.hotdogCollection.add(hotdog)
  }
  
  public getDogs(){
    return this.hotdogs;
    
  }
}
