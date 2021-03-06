import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntegrationComponent } from './integration.component';

const routes: Routes = [
    {
        path: '',
        component: IntegrationComponent,
        data: {
            title: 'Dashboard'
        }
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntegrationRoutingModule { }
