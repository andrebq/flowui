let colors = {
    processor: {
        default: {
            fill: 0x00F9FF,
            border: 0x14FF00
        }
    }
};

function svgColor(v) {
    return "#" + v.toString(16);
}
export { svgColor, colors };
