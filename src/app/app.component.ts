import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
    var config = {
      apiKey: "AIzaSyCaaDcDBIXBJMJSLRSCCvcJBg3YQQK9o0A",
      authDomain: "blog-6d0b6.firebaseapp.com",
      databaseURL: "https://blog-6d0b6.firebaseio.com",
      projectId: "blog-6d0b6",
      storageBucket: "",
      messagingSenderId: "704633242759"
    };
    firebase.initializeApp(config);

  }
  
  posts: Array<Object> = [
    {
      title: 'Mon premier post',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iste provident, incidunt quidem ipsam soluta vitae repellat quaerat dignissimos consequuntur! Labore, non harum minima voluptatem ipsa ratione tempora temporibus amet?',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'Mon deuxième post',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iste provident, incidunt quidem ipsam soluta vitae repellat quaerat dignissimos consequuntur! Labore, non harum minima voluptatem ipsa ratione tempora temporibus amet?',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'Encore un post',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iste provident, incidunt quidem ipsam soluta vitae repellat quaerat dignissimos consequuntur! Labore, non harum minima voluptatem ipsa ratione tempora temporibus amet?',
      loveIts: 0,
      created_at: new Date()
    },

  ];
  
}
