import {Component} from 'angular2/core';

@Component({
  selector: 'app',
  styleUrls: ['./client/components/app.component.css'],
  templateUrl: './client/components/app.component.html'
})
export class AppComponent {
  statement: string = 'Sample Angular2 seed project with a directory structure that helps when integrating other platforms.';
  url: string = 'https://github.com/NathanWalker/angular2-webpack-seed';
}
