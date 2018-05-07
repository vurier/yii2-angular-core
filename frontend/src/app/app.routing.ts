import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// Layouts
import {FullLayoutComponent} from './layouts/full-layout.component';

// Components
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: FullLayoutComponent,
        children: [
            {
                path: '',
                component: HomeComponent
            },
            {
                path: 'integration',
                loadChildren: 'app/integration/integration.module#IntegrationModule'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}