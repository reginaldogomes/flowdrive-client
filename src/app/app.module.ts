import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/layouts/header/header.component';
import { FooterComponent } from './shared/components/layouts/footer/footer.component';
import { PageErrorComponent } from './pages/page-error/page-error.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

import { SharedModule } from './shared/shared.module';

@NgModule({
	declarations: [
		AppComponent,
		FooterComponent,
		PageErrorComponent,
		LoginComponent,
		RegisterComponent,
		HeaderComponent
	],
	imports: [BrowserModule, AppRoutingModule, SharedModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
