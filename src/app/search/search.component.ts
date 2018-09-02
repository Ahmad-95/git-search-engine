import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { 
  debounceTime, distinctUntilChanged, switchMap 
} from 'rxjs/operators';
import { User } from '../user';
import { UserService } from '../user.service';
import { GithubUser } from '../GithubUser';
import { GithubRepo } from '../GithubRepos';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() searchOut = new EventEmitter<GithubUser>();
  @Output() rep = new EventEmitter<GithubRepo[]>();
  constructor(private userService: UserService) { }

  // Push a search term into the observable stream.
  search(term: string): any{
    
    this.userService.searchUsers(term)
    .subscribe((x: GithubUser) => {
     // console.log('xaxa', x);
     // console.log('xaxa', x.avatar_url, x.id)
      this.searchOut.emit(x);
    },
  err => {
    //console.log('Invalid');
  });

  
  }

  showRepos(term: string): any{
    this.userService.Repos(term)
    .subscribe((x: GithubRepo[]) => 
    {
      //console.log('REPO',x);
      this.rep.emit(x);
    },
    
  );
  }

  ngOnInit(){

  }

  

}
