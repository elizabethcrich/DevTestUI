import { Injectable } from '@angular/core';
import { Person } from '../models/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private route = "People";

  constructor() { }

  public getPeople() : Person[] {
    let person = new Person();
    person.id = 1;
    person.orgId = 1;
    person.extPersonId = "123456";
    person.firstName = "Liz";
    person.lastName = "Crich";

    return [person];
  }
}
