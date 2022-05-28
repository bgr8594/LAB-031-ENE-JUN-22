import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadosClientesComponent } from './listados-clientes.component';

describe('ListadosClientesComponent', () => {
  let component: ListadosClientesComponent;
  let fixture: ComponentFixture<ListadosClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadosClientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadosClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
