import { Component, OnInit } from '@angular/core';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent implements OnInit{

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
  }
}
