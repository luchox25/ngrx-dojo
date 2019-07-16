import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-movies',
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.scss']
})
export class SearchMoviesComponent implements OnInit {
  @Output() onSearch : EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  search(searchText: string) {
    this.onSearch.emit(searchText);
  }
}
