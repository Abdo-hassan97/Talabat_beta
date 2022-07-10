import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(public fireservices:AngularFirestore) { }

  creatNewResturant(Record:any){
    debugger
return this.fireservices.collection('Resturant').add(Record)
  }
}
