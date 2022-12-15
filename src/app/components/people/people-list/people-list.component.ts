import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
  people: Person[] = [];

  constructor(private personService: PersonService) {}

  ngOnInit(): void {
    this.personService.getPeople()
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
