/// <reference path="corecase.component.ts" />
import { NgModule } from '@angular/core';
import { MainComponent } from './components/main/main.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { CoreCaseComponent } from './corecase.component'


const routes: Routes = [
    {
        path: 'corecase', component: CoreCaseComponent ,
        children: [
            { path: ':id', component: MainComponent },
            { path: 'main', component: MainComponent }]
      },
      { path: '**', redirectTo: 'corecase' }
    
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        MaterialModule
        
    ],
    declarations: [
        MainComponent,
        SidenavComponent,
        ToolbarComponent,
        CoreCaseComponent
    ]
})
export class CorecaseModule {
}