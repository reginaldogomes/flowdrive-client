import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
	selector: 'app-root',
	template:
		'<app-header *ngIf="!isLoginPage"></app-header><router-outlet></router-outlet><app-footer *ngIf="!isLoginPage"></app-footer>'
})
export class AppComponent {
	isLoginPage: Boolean = false;

	constructor(private Location: Location) {
		let urlPath = this.Location.path();
		if (urlPath == '/login' || urlPath == '/register') {
			this.isLoginPage = true;
		}
	}
}
