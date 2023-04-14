import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { PageErrorComponent } from './pages/page-error/page-error.component';

const routes: Routes = [
	{ path: '', component: IndexComponent, pathMatch: 'full' },
	{ path: '**', component: PageErrorComponent, pathMatch: 'full' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
