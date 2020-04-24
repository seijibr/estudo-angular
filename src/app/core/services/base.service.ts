import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor() {
    // console.log('Constructor BaseService');
  }

  hello() {
    // console.log( 'Hello!!!' );

    const obs = new Observable( observer => {
      setTimeout( () => {
        observer.next('TOTVS');
      }, 3000);
    });

    console.log('ola');

    obs.subscribe( param => {
      console.log(param);
    });

  }
}
