import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from '../calculator/calculator.component';
import { NameEditorComponent } from '../name-editor/name-editor.component';
import { ProductentryComponent } from '../productentry/productentry.component';

import { TestComponent } from '../test/test.component';

    const routes: Routes = [
        {
            path:"",
            component:CalculatorComponent,
        },
        {
            path:"home",
            component:CalculatorComponent,
        },
        {
            path:"test",
            component:TestComponent,
        },
        {
            path:"template",
            component:ProductentryComponent,
        },
        {
            path:"reactive",
            component:NameEditorComponent,
        }
    ];

    @NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule],
        declarations: []
    })
    export class AppRoutingModule { }
    
