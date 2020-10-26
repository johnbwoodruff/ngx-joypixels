import { TestBed } from '@angular/core/testing';

import { EmojiService } from './emoji.service';

describe('EmojiService', () => {
  let service: EmojiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmojiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should properly convert shortname to image', () => {
    const shortname = ':thumbsup:';
    const image = service.shortnameToImage(shortname);
    expect(image.indexOf('<img')).toBe(0);
  });

  it('should not convert a shortname that does not exist', () => {
    const shortname = ':somegarbageshortname:';
    const image = service.shortnameToImage(shortname);
    expect(image).toBe(shortname);
  });

  it('should convert a unicode character to its corresponding shortname', () => {
    const unicode = '👍';
    const shortname = service.unicodeToShortname(unicode);
    expect(shortname).toBe(':thumbsup:');
  });

  it('should not convert a non-unicode character', () => {
    const unicode = 'blah';
    const shortname = service.unicodeToShortname(unicode);
    expect(shortname).toBe('blah');
  });

  it('should convert a unicode character to an emoji image', () => {
    const unicode = '👍';
    const image = service.unicodeToImage(unicode);
    expect(image.indexOf('<img')).toBe(0);
  });

  it('should not convert a non-unicode character to an emoji image', () => {
    const unicode = 'blah';
    const image = service.unicodeToImage(unicode);
    expect(image).toBe('blah');
  });

  it('should convert mixed text to have correct images', () => {
    const text = 'word|:thumbsup:|anotherword|👍|:somegarbageshortname:';
    const newText = service.convertText(text);
    const array = newText.split('|');
    expect(array[0]).toBe('word');
    expect(array[1].indexOf('<img')).toBe(0);
    expect(array[2]).toBe('anotherword');
    expect(array[3].indexOf('<img')).toBe(0);
    expect(array[4]).toBe(':somegarbageshortname:');
  });
});
