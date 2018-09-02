import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { UserComponent } from './user/user.component';
import { FooComponent } from './foo/foo.component';
import { Bar1Component } from './bar1/bar1.component';
import { Bar2Component } from './bar2/bar2.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    UserComponent,
    FooComponent,
    Bar1Component,
    Bar2Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
