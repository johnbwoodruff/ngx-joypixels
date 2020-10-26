import { SimpleChange, SimpleChanges } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmojiComponent } from './emoji.component';

describe('EmojiComponent', () => {
  let component: EmojiComponent;
  let fixture: ComponentFixture<EmojiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmojiComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmojiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should properly show an image given a valid shortname', () => {
    component.ngOnChanges({
      shortname: new SimpleChange(null, ':thumbsup:', null)
    });
    fixture.detectChanges();
    const el = fixture.nativeElement.querySelector('img');
    expect(el).not.toBeNull();
  });

  it('should merely print the shortname if shortname is invalid', () => {
    component.ngOnChanges({
      shortname: new SimpleChange(null, ':somegarbageshortname:', null)
    });
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement.querySelector('span');
    expect(el.innerText).toBe(':somegarbageshortname:');
  });
});
