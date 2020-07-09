import * as PIXI from 'pixi.js';
import { mousePosition } from './states';
import { Processor } from './processor';

let newUnits = [
    new Processor({position: new PIXI.Point(50, 50)})
];

const app = new PIXI.Application();
const flowuiRoot = document.getElementById("flowui-root");
flowuiRoot.appendChild(app.view);
app.renderer.autoResize = true;
app.renderer.resize(flowuiRoot.offsetWidth, flowuiRoot.offsetHeight);
window.onresize = () => app.renderer.resize(flowuiRoot.offsetWidth, flowuiRoot.offsetHeight);
flowuiRoot.onmousedown = (ev) => {
    console.log(mousePosition.value);
}
flowuiRoot.onmousemove = (ev) => {
    mousePosition.value = new PIXI.Point(ev.x, ev.y);
}

app.stage.scale = new PIXI.Point(0.5, 0.5);

app.ticker.add(() => {
    newUnits.forEach((v, _idx) => app.stage.addChild(v.graphics));
    newUnits = [];
})
