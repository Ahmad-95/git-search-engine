import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from './user';
import { catchError } from 'rxjs/operators';
import { GithubUser } from './GithubUser';
import { GithubRepo } from './GithubRepos';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }
  
  searchUsers(term: string): Observable<GithubUser> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      // return of([]);
    }
    return this.http.get<GithubUser>('https://api.github.com/users/' + term + '?access_token=6c3396fc52592e5a761ade782a538885f34ebda1');
    
    // .pipe(catchError(this.handleError()));
    //console.log('from service', term);
  }
  
  Repos(term: string): Observable<GithubRepo[]> {
    if(!term.trim()) {}
    return this.http.get<GithubRepo[]>('https://api.github.com/users/' + term + '/repos?access_token=6c3396fc52592e5a761ade782a538885f34ebda1')
  }

  handleError(): any{

    console.log('Invalid Username');
  }
  
 
}
