import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEditarFrecuenciasComponent } from './agregar-editar-frecuencias.component';

describe('AgregarEditarFrecuenciasComponent', () => {
  let component: AgregarEditarFrecuenciasComponent;
  let fixture: ComponentFixture<AgregarEditarFrecuenciasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarEditarFrecuenciasComponent]
    });
    fixture = TestBed.createComponent(AgregarEditarFrecuenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
