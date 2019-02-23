import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import {
  MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
  MatToolbarModule, MatMenuModule,MatIconModule, MatProgressSpinnerModule
} from '@angular/material';

const MatMoudles = [MatToolbarModule,
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatDialogModule,
  MatTableModule,
  MatMenuModule,
  MatIconModule,
  MatProgressSpinnerModule];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ...MatMoudles,
    BrowserModule,
    ReactiveFormsModule,HttpClientModule,
  ],
  exports: [
    ...MatMoudles,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
