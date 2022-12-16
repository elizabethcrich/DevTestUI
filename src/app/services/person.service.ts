import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Organization } from '../models/organization';
import { Person } from '../models/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private route = "People";
  private orgArg = "Organizations";

  constructor(private http: HttpClient) { }

  public getPeople() : Observable<Person[]> {
    return this.http.get<Person[]>(`${environment.apiUrl}/${this.route}`);
  }

  public getOrganizations() : Observable<Organization[]> {
    return this.http.get<Organization[]>(`${environment.apiUrl}/${this.route}/${this.orgArg}`);
  }

  public getPeopleByOrgId(orgId?: number) : Observable<Person[]> {
    return this.http.get<Person[]>(`${environment.apiUrl}/${this.route}/${orgId}`);
  }

  public peopleSearch(
    orgId?: number,
    extId?: string, 
    fName?: string, 
    lName?: string, 
    email?: string, 
    phone?: string) : Observable<Person[]> {
      return this.http.get<Person[]>(
        `${environment.apiUrl}/${this.route}/Search/${orgId}` +
          `?ExtId=${extId}&FName=${fName}&LName=${lName}&Email=${email}&Phone=${phone}`
        );
    }
}
