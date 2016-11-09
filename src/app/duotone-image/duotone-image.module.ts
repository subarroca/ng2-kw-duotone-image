/**
 * @category   Module
 * @package    com.kiwity.ng2-kw-duotone-image.duotone-image
 * @author     Salvador Subarroca (subarroca@gmail.com)
**/




// ANGULAR
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';




// EXTERNAL




// OWN
import { DuotoneImageComponent } from './duotone-image.component';





@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DuotoneImageComponent
  ],
  exports: [
    DuotoneImageComponent
  ]
})
export class DuotoneImageModule { }
