import { EmojiPipe } from './emoji.pipe';

describe('EmojiPipe', () => {
  it('create an instance', () => {
    const pipe = new EmojiPipe(); // Use DI
    expect(pipe).toBeTruthy();
  });
});
