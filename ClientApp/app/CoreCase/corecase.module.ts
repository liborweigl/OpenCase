import { NgModule } from '@angular/core';
import { MainComponent } from './components/main/main.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';



const routes: Routes = [
    { path: 'main', component: MainComponent },
    { path: '**', redirectTo: 'main' }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        MaterialModule
        
    ],
    declarations: [
        MainComponent,
        SidenavComponent,
        ToolbarComponent]
})
export class CorecaseModule {
}