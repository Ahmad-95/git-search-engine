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
  errorResult: boolean;
  
 
  callThisFunction(value: any) {
    //console.log('xaxa', 'in app component', value); 
    
    // if(!this.searchResult){
    //   console.log("Invalid Search");
    // }

    // console.log("Wrong Input");
    
    this.searchResult = value;
    
    // this.errorResult = value;
    // if(true)
    // {
    //   console.log('HIIII',this.errorResult);
    // }
    
    
  }
  callErrorFunction(value: boolean){
    this.errorResult = value;
    
    //console.log("Error",this.errorResult);
  }
  


  callReposFunction(value: GithubRepo[]) {
    // console.log('Repo', value[0].);
    // if(!this.reposResult){
    //   console.log("Invalid Repo");
    // }
    // console.log("Wrong Input");
    
    this.reposResult = value;
   
  }
  
}
