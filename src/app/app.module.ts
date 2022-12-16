import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeopleOrgComponent } from './components/people/people-org/people-org.component';
import { PeopleSearchComponent } from './components/people/people-search/people-search.component';
import { PeopleListComponent } from './components/people/people-list/people-list.component';
import { PeopleTableComponent } from './components/people/people-table/people-table.component';

@NgModule({
  declarations: [
    AppComponent,
    PeopleListComponent,
    PeopleOrgComponent,
    PeopleSearchComponent,
    PeopleTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
