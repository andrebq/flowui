import * as PIXI from 'pixi.js';
import { colors } from './theme';
let cpuid = 1;

function updateGraphics(pos) {
    let gfx = new PIXI.Graphics();
    gfx.beginFill(colors.processor.default.fill);
    gfx.lineStyle(0);
    gfx.drawCircle(0, 0, 60);
    gfx.endFill();
    gfx.lineStyle(2, colors.processor.default.border);
    gfx.drawCircle(0, 0, 64);

    gfx.position = pos;
    return gfx;
}

export class Processor {
    constructor (opts) {
        opts = opts || {};
        cpuid++;
        this.cpuid = cpuid;
        this.position = opts.position || new PIXI.Point(0, 0);
        this._gfx = updateGraphics(this.position);
    }

    get graphics() {
        if (!this._gfx) {
            this.gfx = updateGraphics(this.position);
        }
        return this._gfx;
    }
};
