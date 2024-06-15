import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrl: './documents.component.css',
})


export class DocumentsComponent implements OnInit {

  forms= [{
    label: 'Nombre del producto',
    input: 'nombreProducto',
    type: 'string'
  },
  {
    label: 'Cantidad requerida',
    input: 'cantidadRequerida',
    type: 'string'
  },
  {
    label: 'Plazo de entrega',
    input: 'plazoEntrega',
    type: 'date'
  },
  {
    label: 'Fecha',
    input: 'fecha',
    type:  'date'
  },
  {
    label: 'Id Asistente',
    input: 'identificacion',
    type:  'string'
  }
  ];

  selectedTab: number = 1;

  selectOption: string = '';
  tabs = [
    {
      label: 'Crear Solicitud',
      route: '/documents/crearSolicitud',
    },
    {
      label: 'Modificar solicitud',
      route: '/documents/modificarSolicitud',
    },
    {
      label: 'Crear Hoja',
      route: '/documents/crearHoja',
    },
    {
      label: 'Modificar Hoja',
      route: '/documents/modificarHoja',
    },
    {
      label: 'Generar guia',
      route: '/documents/guia',
    },
  ];

  /* Manejo de formulario */
  crearSolicitudForm: FormGroup = new FormGroup({});

  //categories = ['Medicamento','Suplemento','Cosmetico'];
  //forms = ['Tableta','Capsula','Liquido','Polvo'];
  solicitudes: any = []; //pa mis productos ficticios
  lastSolicitudId: string = 'SOL001';

  constructor(private fb: FormBuilder) {
    this.crearSolicitudForm = this.fb.group({
      id_solicitud: [{ value: '', disabled: true }],
      nombreProducto: ['', Validators.required],
      cantidadRequerida: ['', Validators.required],
      plazoEntrega: ['', Validators.required],
      fecha: ['', [Validators.required, Validators.min(0)]],
      identificacion: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.generateSolicitudId();
  }

  generateSolicitudId(): void {
    const currentIdNumber = parseInt(this.lastSolicitudId.slice(3)) + 1;
    const newId = 'SOL' + currentIdNumber.toString().padStart(3, '0');
    this.crearSolicitudForm.get('id_solicitud')?.setValue(newId);
  }

  onSubmit(): void {
    if (this.crearSolicitudForm.valid) {
      const solicitudData = {
        ...this.crearSolicitudForm.value,
        id_solicitud: this.crearSolicitudForm.get('id_solicitud')?.value,
      };
      this.solicitudes.push(solicitudData);
      console.log('Solicitud creada con éxito', solicitudData);

      // Actualizar el último ID de solicitud
      const currentIdNumber = parseInt(this.lastSolicitudId.slice(3)) + 1;
      this.lastSolicitudId = 'SOL' + currentIdNumber.toString().padStart(3, '0');
      
      // Generar nuevo ID de solicitud y vaciar el formulario
      this.crearSolicitudForm.reset();
      this.generateSolicitudId();
    } else {
      console.log('Formulario inválido');
    }
  }
  
  selectRow(solicitud: any): void {
    this.crearSolicitudForm.patchValue({
      id_solicitud: solicitud.id_solicitud,
      nombreProducto: solicitud.nombreProducto,
      cantidadRequerida: solicitud.cantidadRequerida,
      plazoEntrega: solicitud.plazoEntrega,
      fecha: solicitud.fecha,
      identificacion: solicitud.identificacion,
    });
  }

  onTabSelected(route: string): void {
    this.selectOption = route;
    console.log(`Navigating to ${route}`);
  }
}
