import { Component, OnInit } from '@angular/core';
import { Organization } from 'src/app/models/organization';
import { Person } from 'src/app/models/person';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-people-org',
  templateUrl: './people-org.component.html',
  styleUrls: ['./people-org.component.css']
})
export class PeopleOrgComponent implements OnInit {
  people: Person[] = [];
  organizations: Organization[] = [];

  constructor(private personService: PersonService) {}

  ngOnInit(): void {
    this.personService.getOrganizations()
      .subscribe({
        next: (result) => {
          this.organizations = result;
          console.log(this.organizations);
        },
        error: (response) => {
          console.log(response);
        }
      })
  }

  getPeopleByOrg(id?: number) {
    this.personService.getPeopleByOrgId(id)
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
