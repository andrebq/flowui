import { vec2 } from './math';
import { svgColor, colors } from './theme';
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
        this.position = opts.position || vec2(x, x);
    }

    render() {
        let p = document.createElementNS("http://www.w3.org/2000/svg", "g");
        p.setAttribute("data-cpuid", this.cpuid.toString());
        let c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        c.setAttribute("cx", 0);
        c.setAttribute("cy", 0);
        c.setAttribute("r", 60);
        c.setAttribute("fill", svgColor(colors.processor.default.fill));
        p.append(c);

        c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        c.setAttribute("cx", 0);
        c.setAttribute("cy", 0);
        c.setAttribute("r", 64);
        c.setAttribute("stroke", svgColor(colors.processor.default.border))
        p.append(c);

        this.updateTransform(p);

        return p;
    }

    updateTransform(g) {
        g.setAttribute("transform", `translate(${this.position.x}, ${this.position.y})`);
    }
};
