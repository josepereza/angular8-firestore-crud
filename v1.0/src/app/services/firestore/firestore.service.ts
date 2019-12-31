import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore) {}

  // Crea un nuevo Item
  public createItem(data: any) {
    return this.firestore.collection('items').add(data);
  }

  // Obtiene un Item
  public getItem(documentId: string) {
    return this.firestore.collection('items').doc(documentId).snapshotChanges();
  }

  // Obtiene todos los Items
  public getItems() {
    return this.firestore.collection('items').snapshotChanges();
  }

  // Actualiza un Item
  public updateItem(documentId: string, data: any) {
    return this.firestore.collection('items').doc(documentId).set(data);
  }

  // Borra un Item
  public deleteItem(documentId: string) {
    return this.firestore.collection('items').doc(documentId).delete();
  }
}
