import { Component, Input, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person';

@Component({
  selector: 'app-people-table',
  templateUrl: './people-table.component.html',
  styleUrls: ['./people-table.component.css']
})
export class PeopleTableComponent implements OnInit {
  @Input() people: Person[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
