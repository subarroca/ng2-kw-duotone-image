/**
 * @category   Module
 * @package    com.kiwity.ng2-kw-duotone-image.app
 * @author     Salvador Subarroca (subarroca@gmail.com)
**/




// ANGULAR
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';




// EXTERNAL




// OWN
import { AppComponent } from './app.component';
import { DuotoneImageModule } from './duotone-image';






@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DuotoneImageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
