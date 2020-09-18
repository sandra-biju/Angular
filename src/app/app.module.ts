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
import { NameEditorComponent } from './name-editor/name-editor.component'

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    CalculatorComponent,
    TodoComponent,
    ProductentryComponent,
    NameEditorComponent,
    
    
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
