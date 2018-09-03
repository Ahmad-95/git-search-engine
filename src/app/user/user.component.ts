import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { SearchComponent } from '../search/search.component';
import { Input } from '@angular/core';
import { GithubUser } from '../GithubUser';
import { GithubRepo } from '../GithubRepos';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() searchIn: GithubUser;
  @Input() repOut: GithubRepo[];
  @Input() errorIn: boolean;
 
  constructor() { }

  ngOnInit() {
    // console.log("Error",this.errorIn);
    // console.log("Ahmad");
    // console.log("Repos List", this.repOut)
  }
  
  

}
