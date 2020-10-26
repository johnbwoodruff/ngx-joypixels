import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { EmojiService } from '../../services/emoji.service';

@Component({
  selector: 'jp-emoji',
  templateUrl: './emoji.component.html',
  styleUrls: ['./emoji.component.css']
})
export class EmojiComponent implements OnChanges {
  @Input() shortname: string;
  image: string;

  constructor(private emojiService: EmojiService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.shortname.currentValue) {
      this.setImage(changes.shortname.currentValue);
    }
  }

  private setImage(shortname: string): void {
    this.image = this.emojiService.shortnameToImage(shortname);
  }
}
