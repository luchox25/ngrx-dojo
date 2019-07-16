import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { ROOT_REDUCER, INITIAL_STATE } from './store';
import { MoviesEffects } from './movies/store/effects/movies.effects';

const effects = [MoviesEffects];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(ROOT_REDUCER, {
      initialState: INITIAL_STATE,
    }),
    EffectsModule.forRoot(effects),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
