import { Component } from '@angular/core';
declare var $: any; 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  ngOnInit() {
    $('.navbar-toggler').click(function(){
      $('#navbarNav').collapse('toggle');
    });
  }
  
}
