import Rx from 'rx';
import Cycle from '@cycle/core';
import {makeDOMDriver, div} from '@cycle/dom';

function main() {
  return {
    DOM: Rx.Observable.of(
      div('Welcome to CycleCS')
    )
  };
}

const drivers = {
  DOM: makeDOMDriver('#app')
};

Cycle.run(main, drivers);
