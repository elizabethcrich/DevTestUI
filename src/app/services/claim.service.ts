import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClaimService {

  private route = "Claims"

  constructor(private http: HttpClient) { }

  public getClaimsByPerson(personId?: string, extPersonId?: string) {
    return this.http.get<Object[]>(`${environment.apiUrl}/${this.route}/Person` +
      `?PersonId=${personId}&ExternalPersonId=${extPersonId}`
    );
  }
}
