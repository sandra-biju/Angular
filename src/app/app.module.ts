import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app-routing/app-routing.module'
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { TodoComponent } from './todo/todo.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { ProductentryComponent } from './productentry/productentry.component'
import {FormsModule} from '@angular/forms'
import {ReactiveFormsModule} from '@angular/forms';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { StoreComponent } from './store/store.component'
import {HttpClientModule} from '@angular/common/http';
import { ProductlistComponent } from './productlist/productlist.component'
import {SampleModule} from './sample/sample.module';
import { AnimationComponent } from './animation/animation.component'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ImageanimationComponent } from './imageanimation/imageanimation.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { EmployeeComponent } from './employee/employee.component'

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    CalculatorComponent,
    TodoComponent,
    ProductentryComponent,
    NameEditorComponent,
    StoreComponent,
    ProductlistComponent,
    AnimationComponent,
    ImageanimationComponent,
    EmployeeComponent,
    
    
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SampleModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
