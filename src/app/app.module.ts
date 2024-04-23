import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EditorModule } from '@tinymce/tinymce-angular';
import { AppComponent } from './app.component';
import { TinyComponent } from './components/tiny/tiny.component';

@NgModule({
  declarations: [
    AppComponent,
    TinyComponent
  ],
  imports: [
    BrowserModule,
    EditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
