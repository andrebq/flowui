import { mousePosition } from './states';
import { Processor } from './processor';
import { vec2 } from './math';

let newUnits = [
    new Processor({position: {x: 0.0, y: 0.0}})
];

const flowuiRoot = document.getElementById("flowui-root");
const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
const cpus = document.createElementNS("http://www.w3.org/2000/svg", "g");
cpus.setAttribute("transform", "scale(0.5,0.5)");
cpus.setAttribute("id", "cpus");
svg.appendChild(cpus);

flowuiRoot.appendChild(svg);
flowuiRoot.onmousedown = (ev) => {
    console.log(mousePosition.value);
}
flowuiRoot.onmousemove = (ev) => {
    mousePosition.value = vec2(ev.x, ev.y);
}

function update() {
    svg.setAttribute("width", flowuiRoot.offsetWidth);
    svg.setAttribute("height", flowuiRoot.offsetHeight);
    newUnits.map(v => v.render())
        .forEach((v, _i) => svg.querySelector('#cpus').appendChild(v));
    newUnits = [];
}

function raf() {
    update();
    window.requestAnimationFrame(raf);
}
raf();
