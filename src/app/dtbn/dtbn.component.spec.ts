import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DtbnComponent } from './dtbn.component';

describe('DtbnComponent', () => {
  let component: DtbnComponent;
  let fixture: ComponentFixture<DtbnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DtbnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DtbnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
