import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import {AngularFireModule} from '@angular/fire';
import { AngularFireModule } from "@angular/fire/compat";
// import {AngularFireDatabaseModule} from '@angular/fire/database';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';
// import {AngularFirestoreModule} from '@angular/fire/firestore';
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
// import { FormsModule } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {CrudService} from './service/crud.service'
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
