import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


import { AppComponent } from './app.component';
import { ItemsComponent } from './components/items/items.component';
import { FirestoreService } from './services/firestore/firestore.service';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'items', pathMatch: 'full' },
      { path: 'items', component: ItemsComponent }
    ]),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFontAwesomeModule
  ],
  providers: [
    AngularFirestore,
    FirestoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
