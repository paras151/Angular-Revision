import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenteredH1Component } from './centered-h1.component';

describe('CenteredH1Component', () => {
  let component: CenteredH1Component;
  let fixture: ComponentFixture<CenteredH1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CenteredH1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CenteredH1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
