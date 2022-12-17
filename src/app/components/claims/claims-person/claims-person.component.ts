import { Component, OnInit } from '@angular/core';
import { ClaimService } from 'src/app/services/claim.service';

@Component({
  selector: 'app-claims-person',
  templateUrl: './claims-person.component.html',
  styleUrls: ['./claims-person.component.css']
})
export class ClaimsPersonComponent implements OnInit {
  claims: Object[] = [];
  personId = '';
  externalPersonId = '';

  constructor(private claimService: ClaimService) {}

  ngOnInit(): void {
  }

  searchClaims(personId?: string, externalPersonId?: string) {
    this.claimService.getClaimsByPerson(personId, externalPersonId)
      .subscribe({
        next: (result) => {
          this.claims = result;
          console.log(this.claims);
        },
        error: (response) => {
          console.log(response);
        }
      })
  }
}
