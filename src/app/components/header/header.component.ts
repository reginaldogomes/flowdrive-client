import { Component } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html'
})
export class HeaderComponent {
	title = 'Gestão de Estacionamento';
	isLoggedIn = false;

	showMenu = false;
	toggleNavbar() {
		this.showMenu = !this.showMenu;
	}
}
