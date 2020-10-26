import { TestBed } from '@angular/core/testing';
import { EmojiPipe } from './emoji.pipe';

describe('EmojiPipe', () => {
  let pipe: EmojiPipe;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmojiPipe],
      providers: [EmojiPipe]
    });
    pipe = TestBed.inject(EmojiPipe);
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return empty string if passed null', () => {
    expect(pipe.transform(null)).toBe('');
  });

  it('should transform text properly', () => {
    const text = 'word|:thumbsup:|anotherword|👍|:somegarbageshortname:';
    const newText = pipe.transform(text);
    const array = newText.split('|');
    expect(array[0]).toBe('word');
    expect(array[1].indexOf('<img')).toBe(0);
    expect(array[2]).toBe('anotherword');
    expect(array[3].indexOf('<img')).toBe(0);
    expect(array[4]).toBe(':somegarbageshortname:');
  });
});
