import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { appRouting, appRoutingProviders } from './app.routing';

import { VisitorModule } from './visitor/visitor.module';
import { UserModule } from './user/user.module';
import { AdministratorModule } from './administrator/administrator.module';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    appRouting,
    VisitorModule,
    UserModule,
    AdministratorModule
  ],
  declarations: [AppComponent],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule {
}
