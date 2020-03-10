import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from '../../services/firestore/firebase.service';

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

  constructor(private _firebase: FirebaseService) {}

  ngOnInit() {
    this.newItemForm.setValue({
      id: '',
      nombre: '',
      descripcion: '',
      url: ''
    });
    this._firebase.getItems().subscribe((itemsSnapshot) => {
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
      this._firebase.createItem(data).then(() => {
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
      this._firebase.updateItem(documentId, data).then(() => {
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
    const editSubscribe = this._firebase.getItem(documentId).subscribe((item) => {
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
    this._firebase.deleteItem(documentId).then(() => {
      console.log('Documento eliminado.');
    }, (error) => {
      console.error(error);
    });
  }
}
