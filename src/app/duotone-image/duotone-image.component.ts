/**
 * @category   Component
 * @package    com.kiwity.ng2-kw-duotone-image.duotone-image
 * @author     Salvador Subarroca (subarroca@gmail.com)
**/




// ANGULAR
import { Component, OnInit, Input } from '@angular/core';




// EXTERNAL




// OWN




// http://codepen.io/jmperez/pen/LGqaxQ

@Component({
  selector: 'ng2-kw-duotone-image',
  templateUrl: './duotone-image.component.html',
  styleUrls: ['./duotone-image.component.scss']
})
export class DuotoneImageComponent implements OnInit {
  @Input() src: string;
  @Input() width: number;
  @Input() height: number;

  @Input()
  set darkColor(color: string) {
    this._darkColor = this.hexToRgb(color);
  }

  @Input()
  set lightColor(color: string) {
    this._lightColor = this.hexToRgb(color);
  }


  _darkColor: { r: number, g: number, b: number };
  _lightColor: { r: number, g: number, b: number };



  constructor() { }

  ngOnInit() {
  }


  hexToRgb(hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
      return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }

  get duotoneMatrix() {
    let value = [];
    value = value.concat(
      [this._lightColor.r / 256 - this._darkColor.r / 256, 0, 0, 0, this._darkColor.r / 256]);
    value = value.concat(
      [this._lightColor.g / 256 - this._darkColor.g / 256, 0, 0, 0, this._darkColor.g / 256]);
    value = value.concat(
      [this._lightColor.b / 256 - this._darkColor.b / 256, 0, 0, 0, this._darkColor.b / 256]);
    value = value.concat([0, 0, 0, 1, 0]);

    return value;
  }
}
