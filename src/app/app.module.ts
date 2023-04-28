import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomPipePipe } from './Pipes/custom-pipe.pipe';
import { FindPowerPipe } from './Pipes/find-power.pipe';
import { CustomDirectiveDirective } from './custom-directive.directive';
import { TestModuleModule } from './test-module/test-module.module';

@NgModule({
  declarations: [
    AppComponent,
    CustomPipePipe,
    FindPowerPipe,
    CustomDirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TestModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
