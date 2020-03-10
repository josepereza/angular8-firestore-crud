import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FirestoreService } from '../../services/firestore/firestore.service';
import { Item } from '../../models/item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit, OnDestroy {

  public documentId = null;
  public items = [];
  public currentStatus = 1;
  public newItemForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    descripcion: new FormControl('', Validators.required),
    url: new FormControl('', Validators.required),
    id: new FormControl('')
  });

  constructor(private firestoreService: FirestoreService) {}

  ngOnInit() {
    this.newItemForm.setValue({
      id: '',
      nombre: '',
      descripcion: '',
      url: ''
    });
    this.firestoreService.getItems().subscribe((itemsSnapshot) => {
      this.items = [];
      itemsSnapshot.forEach((itemData: any) => {
        this.items.push({
          id: itemData.payload.doc.id,
          data: itemData.payload.doc.data()
        });
      });
    });
  }

  ngOnDestroy() {

  }

  public newItem(form, documentId = this.documentId) {
    console.log(`Status: ${this.currentStatus}`);
    if (this.currentStatus === 1) {
      const data = {
        nombre: form.nombre,
        descripcion: form.descripcion,
        url: form.url
      };
      this.firestoreService.createItem(data).then(() => {
        console.log('Documento creado.');
        this.newItemForm.setValue({
          nombre: '',
          descripcion: '',
          url: '',
          id: ''
        });
      }, (error) => {
        console.error(error);
      });
    } else {
      const data = {
        nombre: form.nombre,
        descripcion: form.descripcion,
        url: form.url
      };
      this.firestoreService.updateItem(documentId, data).then(() => {
        this.currentStatus = 1;
        this.newItemForm.setValue({
          nombre: '',
          descripcion: '',
          url: '',
          id: ''
        });
        console.log('Documento editado.');
      }, (error) => {
        console.log(error);
      });
    }
  }

  public editItem(documentId) {
    const editSubscribe = this.firestoreService.getItem(documentId).subscribe((item) => {
      this.currentStatus = 2;
      this.documentId = documentId;
      this.newItemForm.setValue({
        id: documentId,
        nombre: item.payload.data()['nombre'],
        descripcion: item.payload.data()['descripcion'],
        url: item.payload.data()['url']
      });
      editSubscribe.unsubscribe();
    });
  }

  public deleteItem(documentId) {
    this.firestoreService.deleteItem(documentId).then(() => {
      console.log('Documento eliminado.');
    }, (error) => {
      console.error(error);
    });
  }
}
