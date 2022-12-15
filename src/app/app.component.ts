import { Component } from '@angular/core';
import { Person } from './models/person';
import { PersonService } from './services/person.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DevTestUI';
  people: Person[] = [];

  constructor(private personService: PersonService) {}

  ngOnInit() : void {
    this.people = this.personService.getPeople();
    console.log(this.people);
  }
}
