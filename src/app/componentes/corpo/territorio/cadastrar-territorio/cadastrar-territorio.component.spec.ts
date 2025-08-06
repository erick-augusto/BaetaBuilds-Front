import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarTerritorioComponent } from './cadastrar-territorio.component';

describe('CadastrarTerritorioComponent', () => {
  let component: CadastrarTerritorioComponent;
  let fixture: ComponentFixture<CadastrarTerritorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarTerritorioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarTerritorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
