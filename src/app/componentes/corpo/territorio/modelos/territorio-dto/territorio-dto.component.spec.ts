import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerritorioDTOComponent } from './territorio-dto.component';

describe('TerritorioDTOComponent', () => {
  let component: TerritorioDTOComponent;
  let fixture: ComponentFixture<TerritorioDTOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerritorioDTOComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerritorioDTOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
