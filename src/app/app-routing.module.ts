import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FromEventComponent } from './list/from-event/from-event.component';
import { IntervalandtimerComponent } from './list/intervalandtimer/intervalandtimer.component';
import { ListComponent } from './list/list.component';
import { OFandFromComponent } from './list/ofand-from/ofand-from.component';
import { ToArrayComponent } from './list/to-array/to-array.component';

const routes: Routes = [
  {
    path: '',
    component: ListComponent,
    children: [
      {
        path: 'fromevent/:title',
        component: FromEventComponent,
      },
      {
        path: 'intervalandtimer/:title',
        component: IntervalandtimerComponent,
      },
      {
        path: 'ofandfrom/:title',
        component: OFandFromComponent,
      },
      {
        path: 'toArray/:title',
        component: ToArrayComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
