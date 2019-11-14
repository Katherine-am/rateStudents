import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { StudentFormComponent } from './components/student-form/student-form.component';
import { CreateComponent } from './components/create/create.component';
import { RateComponent } from './components/rate/rate.component';
import { UpdateComponent } from './components/update/update.component';
import { HttpService } from './services/http.service';
import { NewstudentComponent } from './components/newstudent/newstudent.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentFormComponent,
    CreateComponent,
    RateComponent,
    UpdateComponent,
    NewstudentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
