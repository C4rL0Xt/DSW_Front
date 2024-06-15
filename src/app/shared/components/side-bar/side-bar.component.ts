import { Component, OnInit } from '@angular/core';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent implements OnInit{

  //? TEST DE ROL
  userRole: string = 'almacen';
  menuOptions: any[] = [];

  constructor(private elementRef: ElementRef){}

  ngOnInit() {
    const menuItems = this.elementRef.nativeElement.querySelectorAll('.menu-item') as NodeListOf<HTMLElement>;
    menuItems.forEach((menuItem: HTMLElement) => {
      menuItem.addEventListener('click', () => {
        // Elimina la clase 'active' de todos los elementos del menú
        menuItems.forEach(item => item.classList.remove('active'));
        // Agrega la clase 'active' al elemento seleccionado
        menuItem.classList.add('active');
      });
    });

    this.setMenuItemsBasedOnRole();
  }

  setMenuItemsBasedOnRole(){
    if(this.userRole === 'almacen'){
      this.menuOptions = [
        {label: 'Inicio', route: '/almacen/inicio', image:'assets/icons/home.svg'},
        {label: 'Producto', route: '/almacen/productos',image: 'assets/icons/capsule.svg'},
        {label: 'Documentos', route: '/almacen/documentos', image: 'assets/icons/guia.svg'}
      ];
    }else if (this.userRole === 'compra'){
      this.menuOptions = [
        {label: 'Inicio', route: '/compra/inicio'},
        {label: 'Cotizaciones', route: '/compra/cotizacion'}
      ]
    }
  }
}
