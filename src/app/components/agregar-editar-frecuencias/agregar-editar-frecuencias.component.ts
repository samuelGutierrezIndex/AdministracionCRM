import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ADTSettings } from 'angular-datatables/src/models/settings';


@Component({
  selector: 'app-agregar-editar-frecuencias',
  templateUrl: './agregar-editar-frecuencias.component.html',
  styleUrls: ['./agregar-editar-frecuencias.component.scss'],
})
export class AgregarEditarFrecuenciasComponent implements OnInit {

  novedadesForm: FormGroup;
  descripcionValue: string = '';

  constructor(private formBuilder: FormBuilder) { 

    this.novedadesForm = this.formBuilder.group({
      id: ['', Validators.required],
      fechaInicio: ['', Validators.required],
      fechaFin: ['', Validators.required],
      descripcion: ['']
    });

  }


  concatenateDates() {

    const fechaInicio = this.getDiaSemana(this.novedadesForm.get('fechaInicio')?.value);
    const fechaFin = this.getDiaSemana(this.novedadesForm.get('fechaFin')?.value);

    if (fechaInicio && fechaFin) {
      this.novedadesForm.get('descripcion')?.setValue(`De ${fechaInicio} a ${fechaFin}`);
    } else {
      this.novedadesForm.get('descripcion')?.setValue('');
    }

  }

  getDiaSemana(valor: string): string {
    switch (valor) {
      case 'L':
        return 'Lunes';
      case 'M':
        return 'Martes';
      case 'K':
        return 'Miércoles';
      case 'J':
        return 'Jueves';
      case 'V':
        return 'Viernes';
      case 'S':
        return 'Sábado';
      case 'D':
        return 'Domingo';
      default:
        return '';
    }
  }

  submitForm() {
    if (this.novedadesForm.valid) {

      console.log(this.novedadesForm.value);

      let frecuencia = {
        id: this.novedadesForm.get('id')?.value,
        nombre: `${this.novedadesForm.get('fechaInicio')?.value}${this.novedadesForm.get('fechaFin')?.value}`,
        descripcion: this.novedadesForm.get('descripcion')?.value
      }

      let cuerpoJson = JSON.stringify(frecuencia);

      console.log('El cuerpo que se enviara por parametros: ' + cuerpoJson);

    }
  }

  dtOptions: ADTSettings = {};

  data = [
    { id: 1, nombre: 'Producto 1', descripcion: 'Descripción 1' },
    { id: 2, nombre: 'Producto 2', descripcion: 'Descripción 2' },
    { id: 3, nombre: 'Producto 3', descripcion: 'Descripción 3' },
    // Agrega más datos aquí según tus necesidades
  ];

  ngOnInit() {
    this.dtOptions = {
      responsive: true
    };
  }

}
