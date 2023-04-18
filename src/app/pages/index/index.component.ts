import { Component } from '@angular/core';

@Component({
	selector: 'app-index',
	templateUrl: './index.component.html'
})
export class IndexComponent {
	sum = (x: number = 5, y: number = 3): number => x + y;
	userName: string = 'Reginaldo Gomes';
}
