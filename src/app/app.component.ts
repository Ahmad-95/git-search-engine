import { Component } from '@angular/core';
import { GithubUser } from './GithubUser';
import { GithubRepo } from './GithubRepos';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GitHub Search Engine';
  searchResult: GithubUser;
  reposResult: GithubRepo[];
  callThisFunction(value: GithubUser) {
    //console.log('xaxa', 'in app component', value); 
    this.searchResult = value;
  }
  callReposFunction(value: GithubRepo[]) {
    // console.log('Repo', value[0].);
    this.reposResult = value;
  }
}
