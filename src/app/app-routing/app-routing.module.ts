import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimationComponent } from '../animation/animation.component';
import { CalculatorComponent } from '../calculator/calculator.component';
import { EmployeeComponent } from '../employee/employee.component';
import { ImageanimationComponent } from '../imageanimation/imageanimation.component';
import { NameEditorComponent } from '../name-editor/name-editor.component';
import { ProductentryComponent } from '../productentry/productentry.component';
import { ProductlistComponent } from '../productlist/productlist.component';
import { StoreComponent } from '../store/store.component';

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
        },
        {
            path:"store",
            component:StoreComponent,
        },
        {
            path:"view",
            component:ProductlistComponent,
        },
        {
            path:"animation",
            component:AnimationComponent,
        },
        {
            path:"imageanimation",
            component:ImageanimationComponent,
        },
        {
            path:"pagination",
            component:EmployeeComponent,
        },

    ];

    @NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule],
        declarations: []
    })
    export class AppRoutingModule { }
    
