import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountService {
  valor = 0;
  counter = signal(this.valor);

  increment(){
    this.counter.update(value => value + 1);

  }
  decrement(){
    this.counter.update(value => value - 1);
    }


}
