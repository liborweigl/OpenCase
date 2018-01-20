
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, FormControl, Validators, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from "@angular/flex-layout";


import { MaterialModule } from '../material.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainComponent } from './components/main/main.component';

import { CoreCaseComponent } from './corecase.component'
import { AddformComponent } from "./components/addform/addform.component";
import { CasecoreService } from "./services/casecore.service";




const routes: Routes = [
    {
        path: 'corecase', component: CoreCaseComponent ,
        children: [
           
            { path: 'main', component: MainComponent },
            { path: 'add', component: AddformComponent },
            { path: ':id', component: MainComponent },
        ]
      },
      { path: '**', redirectTo: 'corecase' }
    
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        MaterialModule,
        ReactiveFormsModule,
        CommonModule,
        FormsModule,
        FlexLayoutModule
    ],
    providers: [CasecoreService],
    declarations: [
        MainComponent,
        SidenavComponent,
        ToolbarComponent,
        CoreCaseComponent,
        AddformComponent
    ]
})
export class CorecaseModule {
}