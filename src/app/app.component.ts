import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
	selector: 'app-root',
	template:
		'<app-header *ngIf="!isLoginPage"></app-header><router-outlet></router-outlet><app-footer *ngIf="!isLoginPage"></app-footer>'
})
export class AppComponent {
	isLoginPage: Boolean = false;

	constructor(private router: Router) {
		router.events.subscribe((val) => {
			if (val instanceof NavigationEnd) {
				if (val.url == '/login' || val.url == '/register') {
					this.isLoginPage = true;
				} else {
					this.isLoginPage = false;
				}
			}
		});
	}

	ngOnInit() {}
}
