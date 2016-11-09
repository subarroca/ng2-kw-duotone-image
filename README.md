# ng2-kw-duotone-image
Angular2 component to apply a duotone SVG filter to an image

As seen on Angularbeers http://www.meetup.com/AngularJS-Beers/events/234753624/



## Installing
ng2-kw-duotone-image is available via npm
```bash
npm install ng2-kw-duotone-image -S
```

Import DuotoneImageModule in your module
```typescript
import { DuotoneImageModule } from 'ng2-kw-duotone-image';
```



## Usage:
```html
<ng2-kw-duotone-image></ng2-kw-duotone-image>
```
<!-- Set a width and height for the duotone-image and it will scale accordingly. -->



## Options:
<!-- * rounded: boolean = true          | whether linecap should be rounded
* reverse: boolean = false         | segments are sorted by value. whether drawing order should be sorted
* animationSecs: number = 0.5      | animation of lines when changing values
* bgRadius: number = 100           | radius of background circle
* bgColor: string                  | color of background circle
* label: DuotoneImageLabel[]              | labels to be displayed
* segments: DuotoneImageSegment[]         | info to be displayed

*DuotoneImageSegment* is a class you *MUST* use and it has the following properties:
* radius: number = 100             | outer radius of this segment (border is painted inside)
* goal: number = 100               | maximum value for given segment
* value: number                    | value to be represented
* color: string                    | color of the segments
* bgColor: string = 'transparent'  | background color of this segment
* borderWidth: number = 100        | width of the border. Gets painted inside radius

*DuotoneImageLabel* is a class you CAN use and it has the following properties:
* color: string                    | color of this label
* text: string                     | content of this label
* x: number = 0                    | x from starting point (center center)
* y: number = 0                    | y from starting point (center center)
* fontSize: string = '1em'         | font size of this label -->