import { Component } from '@angular/core';
/** Author: Marcelo Salvador */
/**Declaring a model binding to the element */
@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <div class="page-header">
        <h2>Bootstrap/Angular 2 Rocks! <small>Hello, World</small></h2>
      </div>
      <div class="jumbotron">
        <h1>Hello, {{name || 'World'}}</h1>
        <input type="text" [(ngModel)] = "name" placeholder="name" class="form-control form-control-lg">
      </div>
    </div>
  `})
export class AppComponent {
  name: string = 'World';
}
