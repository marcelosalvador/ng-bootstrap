import { Component } from '@angular/core';
/** Author: Marcelo Salvador */
/**Declaring a model binding to the element */
@Component({
  selector: 'my-app',
  template: `
    <h1>Hello, {{name || 'World'}}</h1>
    <input type="text" [(ngModel)] = "name" placeholder="name">

  `})
export class AppComponent {
  name: string = 'World';
}
