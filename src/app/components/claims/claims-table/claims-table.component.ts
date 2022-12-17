import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-claims-table',
  templateUrl: './claims-table.component.html',
  styleUrls: ['./claims-table.component.css']
})
export class ClaimsTableComponent implements OnInit {
  @Input() claims: Object[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
