import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorpIdEncrypterComponent } from './corp-id-encrypter.component';

describe('CorpIdEncrypterComponent', () => {
  let component: CorpIdEncrypterComponent;
  let fixture: ComponentFixture<CorpIdEncrypterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorpIdEncrypterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorpIdEncrypterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
