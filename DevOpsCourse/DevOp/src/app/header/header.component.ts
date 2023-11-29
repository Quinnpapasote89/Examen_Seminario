import { Component } from '@angular/core';
declare var $: any; // Para usar jQuery en tu componente

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  ngOnInit() {

  
    // Añade un manejador de clics al botón para colapsar la barra de navegación
    $('.navbar-toggler').click(function(){
      $('#navbarNav').collapse('toggle');
    });
  }
  
}
