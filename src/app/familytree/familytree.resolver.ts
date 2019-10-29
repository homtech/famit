import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { FirebaseService } from '../firebase/firebase-integration.service';

@Injectable()
export class FamilytreeResolver implements Resolve<any> {

  constructor(private firebaseService: FirebaseService) {}

  resolve() {
   // return this.firebaseService.getFamilyTree();
    return new Promise((resolve, reject) => {
      this.firebaseService.getFamilyTree()
      .then(data => {
        console.log('Data ' + data);
        resolve(data);
      }, err => {
        reject(err);
      })
    })

  }
}
