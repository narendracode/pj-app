import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerNewComponent } from './buyer-new.component';

describe('BuyerNewComponent', () => {
  let component: BuyerNewComponent;
  let fixture: ComponentFixture<BuyerNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyerNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
