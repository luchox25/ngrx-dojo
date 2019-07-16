import { Component, OnInit, Input } from '@angular/core';
import { movie } from '../core/movies-contracts';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.scss']
})
export class ListMoviesComponent implements OnInit {

  @Input() movies: movie[];
  @Input() loading: boolean;

  constructor() { }

  ngOnInit() {
  }

}
