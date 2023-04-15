import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';

@NgModule({
	declarations: [ButtonComponent, DashboardComponent],
	exports: [ButtonComponent],
	imports: [CommonModule]
})
export class SharedModule {}
