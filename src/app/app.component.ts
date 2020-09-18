import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{

  constructor() {
    const firebaseConfig = {
      apiKey: 'AIzaSyA0GUYUdLWhewyZGCt3Zic4kHFGxfl244c',
      authDomain: 'post-it-d1480.firebaseapp.com',
      databaseURL: 'https://post-it-d1480.firebaseio.com/',
      projectId: 'post-it-d1480',
      storageBucket: 'post-it-d1480.appspot.com',
      messagingSenderId: '822333952584',
      appId: '1:822333952584:web:c5b6d34fbb53a5299cfe7d'
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
