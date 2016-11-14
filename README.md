# ng2-kw-duotone-image
Angular2 component to apply a duotone SVG filter to an image

As seen on Angularbeers http://www.meetup.com/AngularJS-Beers/events/234753624/

Based on http://codepen.io/jmperez/pen/LGqaxQ



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
* lightColor: string    | color to be used for whites
* darkColor: string     | color to be used fro blacks
* src: string           | image src
* width: string         | image width
* src: string           | image height