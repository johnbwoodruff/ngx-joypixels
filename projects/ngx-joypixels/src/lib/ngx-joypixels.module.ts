import { NgModule } from '@angular/core';
import { EmojiComponent } from './components/emoji/emoji.component';
import { EmojiPipe } from './pipes/emoji.pipe';



@NgModule({
  declarations: [EmojiComponent, EmojiPipe],
  imports: [],
  exports: [EmojiComponent, EmojiPipe]
})
export class NgxJoypixelsModule { }
