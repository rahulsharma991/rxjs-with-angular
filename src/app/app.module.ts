import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { FromEventComponent } from './list/from-event/from-event.component';
import { IntervalandtimerComponent } from './list/intervalandtimer/intervalandtimer.component';
import { OFandFromComponent } from './list/ofand-from/ofand-from.component';
import { ToArrayComponent } from './list/to-array/to-array.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    FromEventComponent,
    IntervalandtimerComponent,
    OFandFromComponent,
    ToArrayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
