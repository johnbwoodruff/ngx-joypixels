import { Injectable } from '@angular/core';
import * as EmojiToolkit from 'emoji-toolkit';

@Injectable({
  providedIn: 'root'
})
export class EmojiService {

  constructor() {}

  /**
   * Convert a shortname, like :thumbsup:, to an EmojiToolkit image.
   */
  public shortnameToImage(shortname: string): string {
    return EmojiToolkit.shortnameToImage(shortname);
  }

  /**
   * Convert a native unicode emoji to a shortname
   */
  public unicodeToShortname(unicode: string): string {
    return EmojiToolkit.toShort(unicode);
  }

  /**
   * Convert a native unicode emoji to an EmojiToolkit image
   */
  public unicodeToImage(unicode: string): string {
    const shortname = this.unicodeToShortname(unicode);
    return this.shortnameToImage(shortname);
  }

  /**
   * Replace shortcodes and/or native emoji in a blob of text to EmojiToolkit images
   */
  public convertText(text: string): string {
    return EmojiToolkit.toImage(text);
  }
}
