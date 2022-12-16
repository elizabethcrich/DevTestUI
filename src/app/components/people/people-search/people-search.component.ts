import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-people-search',
  templateUrl: './people-search.component.html',
  styleUrls: ['./people-search.component.css']
})
export class PeopleSearchComponent implements OnInit {
  people: Person[] = [];
  organizationId?: number;
  externalPersonId = '';
  personEmail = '';
  firstName = '';
  lastName = '';
  personPhone = '';

  constructor(private personService: PersonService) {}

  ngOnInit(): void {
  }

  searchPeople(
    organizationId?: number,
    externalPersonId?: string, 
    firstName?: string, 
    lastName?: string, 
    personEmail?: string, 
    personPhone?: string) {
    
    this.personService.peopleSearch(organizationId, externalPersonId, firstName, lastName, personEmail, personPhone)
      .subscribe({
        next: (result) => {
          this.people = result;
          console.log(this.people);
        },
        error: (response) => {
          console.log(response);
        }
      })
  }
}
