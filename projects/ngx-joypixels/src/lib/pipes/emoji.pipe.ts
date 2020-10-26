import { Pipe, PipeTransform } from '@angular/core';
import { EmojiService } from '../services/emoji.service';

@Pipe({
  name: 'emoji'
})
export class EmojiPipe implements PipeTransform {
  constructor(private emojiService: EmojiService) {}

  transform(text: string): string {
    if (!text) {
      return '';
    }
    return this.emojiService.convertText(text);
  }

}
