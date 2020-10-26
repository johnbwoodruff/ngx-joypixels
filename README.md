# ngx-joypixels

![Build](https://github.com/johnbwoodruff/ngx-joypixels/workflows/Build/badge.svg) [![npm](https://img.shields.io/npm/dm/ngx-joypixels.svg)](https://www.npmjs.com/package/ngx-joypixels) [![npm](https://img.shields.io/npm/dt/ngx-joypixels.svg)](https://www.npmjs.com/package/ngx-joypixels) [![npm](https://img.shields.io/npm/v/ngx-joypixels.svg)](https://www.npmjs.com/package/ngx-joypixels)

[JoyPixels](https://www.joypixels.com/) for Angular.

## Usage

To use this library, install both JoyPixels' emoji-toolkit and this library, ngx-joypixels, from npm.

```shell
# With yarn
$ yarn add emoji-toolkit ngx-joypixels
# With npm
$ npm install --save emoji-toolkit ngx-joypixels
```

Import the `EmojiModule` into your `app.module.ts` and add it to your `imports` array:

```ts
//...
import { NgxJoypixelsModule } from 'ngx-joypixels';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    //...
    NgxJoypixelsModule
  ]
})
export class AppModule {}
```

You're now ready to go! Check out the documentation below for using the various pieces of this library.

## Component

You can use the component for a single shortcode-to-emoji rendering. Simply use the markup below:

```html
<jp-emoji [shortname]="myVar"></jp-emoji>
```

Where `myVar` is bound to a string with a single shortcode, such as `:poop:`. That component will then render the emoji.

## Pipe

Using the pipe is simple. Below is a sample component that makes use of the EmojiPipe.

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` <div [innerHTML]="text | emoji"></div> `
})
export class AppComponent {
  text: string;

  constructor() {
    this.text = `This will be converted to JoyPixels emojis! :thumbsup: ❤️`;
  }
}
```

The pipe will then convert the text and the output will correctly have the JoyPixels emoji in place of the shortcode and unicode emoji.

As JoyPixels simply replaces shortcodes and native unicode emoji, you will need to bind your output to the `innerHTML` attribute, as is shown in the example above.

## Service

If you'd rather do conversions yourself, this library provides an easy to use service with various methods for managing your emoji! Simply import `EmojiService` where you wish to use it, like the example below:

```ts
import { Component } from '@angular/core';

import { EmojiService } from 'ngx-joypixels';

@Component({
  selector: 'app-root',
  template: ` <div>Hello World!</div> `
})
export class AppComponent {
  constructor(public emojiService: EmojiService) {
    // Emoji Service methods are available to use!
  }
}
```

### shortnameToImage()

This function takes a shortname, such as `:thumbsup:`, and returns an `<img>` tag with the corresponding JoyPixels emoji.

### unicodeToShortname()

This function takes a native unicode emoji, like `❤️`, and returns a the corresponding shortname, in this case, `:heart:`.

### unicodeToImage()

This function takes a native unicode emoji, like `❤️`, and returns an `<img>` tag with the corresponding JoyPixels emoji.

### convertText()

This function takes a string and replaces all instances of native unicode emoji and shortnames with `<img>` tags with their corresponding JoyPixels emoji. This is what we use internally for the EmojiPipe.
