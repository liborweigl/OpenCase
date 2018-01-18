
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
///import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { InputdataComponent } from './components/forms/inputdata/inputdata.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { UserformComponent } from './components/forms/userform/userform.component';
import { NotificationComponent } from './components/notification/notification.component';
import { ValidationscComponent } from './components/validationsc/validationsc.component';
import { AddEntityComponent } from './components/add-entity/add.entity.component';
import { AddEntityService } from './components/add-entity/add.entity.service';
import { List_entityComponent } from './components/list_entity/list_entity.component';
import { PresentEntityComponent } from './components/present-entity/present-entity.component';
import { MaterialModule } from './material.module';
import { SearchComponent } from './components/search/search.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
//import { FlexLayoutModule } from "@angular/flex-layout";

//import 'hammerjs';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        InputdataComponent,
        TabsComponent,
        UserformComponent,
        NotificationComponent,
        ValidationscComponent,
        AddEntityComponent,
        List_entityComponent,
        PresentEntityComponent,
        SearchComponent,
        SidenavComponent,
        //FlexLayoutModule
        ToolbarComponent
    ],
    providers: [AddEntityService],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'input-data', component: InputdataComponent },
            { path: 'app-tabs', component: TabsComponent },
            { path: 'app-userform', component: UserformComponent },
            { path: 'app-notification', component: NotificationComponent },
            { path: 'app-validationsc', component: ValidationscComponent }, 
            { path: 'app-addentity', component: AddEntityComponent },
            { path: 'app-listentity', component: List_entityComponent }, 
            { path: 'app-presententity', component: PresentEntityComponent },  
            { path: 'app-search', component: SearchComponent },  
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModuleShared {
}
