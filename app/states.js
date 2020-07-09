import * as PIXI from 'pixi.js';

function identity(v) { return v };

class State {
    constructor(initial) {
        this._value = initial;
    }

    get value() {
        return this._value;
    }

    set value(v) {
        this._value = v;
    }
}
let mousePosition = new State(new PIXI.Point(0.0, 0.0)); 

export { mousePosition };
