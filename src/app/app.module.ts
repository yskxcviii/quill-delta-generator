import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RichTextEditorComponent } from './components/rich-text-editor/rich-text-editor.component';
import { RichTextViewerComponent } from './components/rich-text-viewer/rich-text-viewer.component';

@NgModule({
  declarations: [AppComponent, RichTextEditorComponent, RichTextViewerComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
