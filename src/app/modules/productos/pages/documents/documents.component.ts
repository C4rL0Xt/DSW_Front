import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrl: './documents.component.css',
})
export class DocumentsComponent implements OnInit {
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
      console.log('Solicitud creada con exito', solicitudData);
      this.lastSolicitudId = solicitudData.id_producto;
      this.generateSolicitudId();
      this.crearSolicitudForm.reset();
      this.crearSolicitudForm.get('id_solicitud')?.setValue(this.lastSolicitudId);
    } else {
      console.log('formulario invalido');
    }
  }

  onTabSelected(route: string): void {
    // Navigate to the selected route
    // This can be done using Angular Router, for example
    this.selectOption = route;
    console.log(`Navigating to ${route}`);
  }
}
