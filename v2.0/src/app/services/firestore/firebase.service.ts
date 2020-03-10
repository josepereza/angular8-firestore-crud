import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firebase: AngularFirestore) {}

  // Crea un nuevo Item
  public createItem(data: any) {
    return this.firebase.collection('items').add(data);
  }

  // Obtiene un Item
  public getItem(documentId: string) {
    return this.firebase.collection('items').doc(documentId).snapshotChanges();
  }

  // Obtiene todos los Items
  public getItems() {
    return this.firebase.collection('items').snapshotChanges();
  }

  // Actualiza un Item
  public updateItem(documentId: string, data: any) {
    return this.firebase.collection('items').doc(documentId).set(data);
  }

  // Borra un Item
  public deleteItem(documentId: string) {
    return this.firebase.collection('items').doc(documentId).delete();
  }

}
