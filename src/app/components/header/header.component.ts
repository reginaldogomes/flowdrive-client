import { Component } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html'
})
export class HeaderComponent {
	title = 'Estacionamento Digital';
	isLoggedIn = false;

	showMenu = false;
	toggleNavbar() {
		this.showMenu = !this.showMenu;
	}
}
