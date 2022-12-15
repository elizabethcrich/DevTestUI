import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Person } from '../models/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private route = "People";

  constructor(private http: HttpClient) { }

  public getPeople() : Observable<Person[]> {
    return this.http.get<Person[]>(`${environment.apiUrl}/${this.route}`);
  }
}
