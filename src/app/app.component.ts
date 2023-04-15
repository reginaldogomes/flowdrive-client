import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-root',
	template: '<app-header></app-header><router-outlet></router-outlet>'
})
export class AppComponent {
	isLoginPage: boolean = true;

	constructor(private route: ActivatedRoute) {}

	ngOnInit() {
		this.route.url.subscribe((event) => {
			console.log(event[0]); // It's an array remember [0]
			console.log(event[0].path); // e.g. /products
			console.log(event[0].parameters); // e.g. { id: 'x8klP0' }
		});
	}
}
