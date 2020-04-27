// Global Variables
let $canvas;
let canvas;
let ctx;

let sketch;
let colorPicker;

let selected_color;

// 상수 정의
const R = 0;
const G = 1;
const B = 2;
const COLOR_LEVEL = 256;

const WIDTH = 800;
const HEIGHT = 800;

class Sketch {
    constructor() {
        this.width = WIDTH;
        this.height = HEIGHT / 3 * 2;

        this.x = 0;
        this.y = 0;

        this.step = 10;  // 구역의 개수

        for (let section = 0; section < this.step; section++) {
            this.draw(section);
        }
    }

    // 캔버스 위치로 부터 구역 반환
    //TODO 구역 캔버스로 부터 받아와서 반환
    getSection(x, y) {
        console.log('Sketch: Section : ' + Math.floor(x / (this.width / this.step)));
        return Math.floor(x / (this.width / this.step));
    }

    // 클릭한 구역의 색상 변경
    draw(section) {
        let color = selected_color;
        if (color === undefined)
            color = randomColor();

        // ctx.fillStyle = color;
        ctx.fillStyle = 'rgb(' + color[R] + ',' + color[G] + ',' + color[B] + ')';
        ctx.fillRect(section * (this.width / this.step), 0, this.width / this.step, this.height);
    }

    //스케치 구역 내의 마우스 이벤트 핸들러
    onMouseDown(x, y) {
        console.log(`Sketch: Mouse Down {${x}, ${y}}`);
        this.draw(this.getSection(x, y));
    }
}

class ColorPicker {
    constructor() {
        this.width = WIDTH;
        this.height = HEIGHT / 3;

        this.x = 0;
        this.y = HEIGHT / 3 * 2;

        this.colors = ["red", "blue", "green", "pink", "violet", "yellow", "cyan"];
        this.n_color = this.colors.length;
        // this.background_color = [0, 0, 0];

        for (let i = 0; i < this.n_color; i++)
            this.draw(i);

        ctx.font = "20px gothic";
        ctx.fillStyle = "black";
        ctx.fillText("현재 선택된 색", this.width / 5, this.y + this.height / 8 * 6);

        ctx.beginPath();
        ctx.strokeStyle = "black";
        ctx.moveTo(0, this.y + this.height / 2);
        ctx.lineTo(this.width, this.y + this.height / 2);
        ctx.stroke();

        ctx.fillStyle = 'red';
        ctx.fillRect(this.width / 5 * 3, this.y + this.height / 8 * 5, this.height / 24, this.height / 8);
        ctx.fillStyle = 'green';
        ctx.fillRect(this.width / 5 * 3 + this.height / 24, this.y + this.height / 8 * 5, this.height / 24, this.height / 8);
        ctx.fillStyle = 'blue';
        ctx.fillRect(this.width / 5 * 3 + this.height / 24 * 2, this.y + this.height / 8 * 5, this.height / 24, this.height / 8);
    }

    draw(i) {
        ctx.beginPath();
        ctx.strokeStyle = this.colors[i];
        ctx.fillStyle = this.colors[i];
        ctx.arc(100 + this.x + i * 100, this.y + this.height / 4, this.height / 8, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
    }

    onMouseDown(x, y) {
        console.log('ColorPicker: Mouse Down {' + x + ', ' + y + '}');

        x = event.offsetX;
        y = event.offsetY;
        let c = ctx.getImageData(x, y, 1, 1).data;

        if (!(c[0] || c[1] || c[2])) {
            return;
        }

        let old = selected_color;
        selected_color = c;
        console.log(`ColorPicker: Color changed ${old} to ${c}`);

        ctx.fillStyle = 'rgb(' + c[R] + ',' + c[G] + ',' + c[B] + ')';
        ctx.fillRect(this.width / 5 * 3, this.y + this.height / 8 * 5, this.height / 8, this.height / 8);
    }
}

function randomColor() {
    let ret = [];
    for (let i = 0; i < 3; i++) {
        ret.push(Math.floor(Math.random() * COLOR_LEVEL));
    }
    console.log(`Create Random Color : [${ret[R]}, ${ret[G]}, ${ret[B]}]`);
    return ret;
}

function init() {
    // 테두리 그리기
    ctx.beginPath();
    ctx.rect(0, 0, WIDTH, HEIGHT);
    ctx.stroke();

    sketch = new Sketch();
    colorPicker = new ColorPicker();
}

function onMouseDown(x, y) {
    if (y <= HEIGHT * 2 / 3) {
        sketch.onMouseDown(x, y);
    } else {
        colorPicker.onMouseDown(x, y);
    }
}

$(document).ready(() => {
    $canvas = $('#canvas');
    canvas = $canvas[0];
    ctx = canvas.getContext('2d');

    $canvas.mousedown(function () {
        let x = event.x - $canvas.offset().left;
        let y = event.y - $canvas.offset().top;
        onMouseDown(x, y);
        return false;
    });

    init();
});