import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'prjFeelSafe';
  books = [
      {"name": "The Godfather", "price": 10, "author": "Mario Puzo"},
      {"name": "The Fellowship of the Ring", "price": 15, "author": "J.R.R. Tolkien"},
      {"name": "Harry Potter and the Deathly Hallows", "price": 20, "author": "J.K. Rowling  "}
    ]

  constructor(private router: Router) {
  }

  ngOnInit(){
    // this.router.navigate(['/login']);
  }

}
