import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslationSelectorComponent } from './translation-selector.component';

describe('TranslationSelectorComponent', () => {
  let component: TranslationSelectorComponent;
  let fixture: ComponentFixture<TranslationSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TranslationSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TranslationSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
