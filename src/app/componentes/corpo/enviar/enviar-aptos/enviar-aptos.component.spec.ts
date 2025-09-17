import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviarAptosComponent } from './enviar-aptos.component';

describe('EnviarAptosComponent', () => {
  let component: EnviarAptosComponent;
  let fixture: ComponentFixture<EnviarAptosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnviarAptosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnviarAptosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
