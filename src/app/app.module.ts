import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MoviesEffects } from './movies/store/effects/movies.effects';
import { HttpClientModule } from '@angular/common/http';
import { MoviesModule} from './movies/movies.module';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { moviesReducer } from './movies/store/reducers/movies.reducers';
library.add(fas);

const effects = [ MoviesEffects ];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MoviesModule,
    FontAwesomeModule,
    StoreModule.forRoot({movies: moviesReducer}),
    EffectsModule.forRoot(effects)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
