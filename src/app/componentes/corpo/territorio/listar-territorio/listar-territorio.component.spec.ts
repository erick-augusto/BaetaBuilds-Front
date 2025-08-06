import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTerritorioComponent } from './listar-territorio.component';

describe('ListarTerritorioComponent', () => {
  let component: ListarTerritorioComponent;
  let fixture: ComponentFixture<ListarTerritorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarTerritorioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarTerritorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
