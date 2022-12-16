import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PeopleListComponent } from './components/people/people-list/people-list.component';
import { PeopleOrgComponent } from './components/people/people-org/people-org.component';
import { PeopleSearchComponent } from './components/people/people-search/people-search.component';

const routes: Routes = [
  {
    path: '',
    component: PeopleListComponent
  },
  {
    path: 'people',
    component: PeopleListComponent
  },
  {
    path: 'people-org',
    component: PeopleOrgComponent
  },
  {
    path: 'people-search',
    component: PeopleSearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
