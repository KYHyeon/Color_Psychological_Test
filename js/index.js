// Global Variables
let $canvas;
let canvas;
let ctx;

// 상수 정의
const R = 0;
const G = 1;
const B = 2;
const COLOR_LEVEL = 256;

const WIDTH = 800;
const HEIGHT = 800;

let step = 10;  // 구역의 개수

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

    for (let i = 0; i < step; i++) {
        let color = randomColor();
        ctx.fillStyle = 'rgb(' + color[R] + ',' + color[G] + ',' + color[B] + ')';
        ctx.fillRect(i / step * WIDTH, 0, WIDTH / step, HEIGHT);
    }
}

// 캔버스 위치로 부터 구역 반환
function getSection(x, y) {
    console.log('Section : ' + Math.floor(x / (WIDTH / step)));
    return Math.floor(x / (WIDTH / step));
}

// 클릭한 구역의 색상 변경
function redraw(section) {
    let color = randomColor();
    ctx.fillStyle = 'rgb(' + color[R] + ',' + color[G] + ',' + color[B] + ')';
    ctx.fillRect(section * (WIDTH / step), 0, WIDTH / step, HEIGHT);
}

//캔버스 내의 마우스 이벤트 핸들러
function onMouseDown(x, y) {
    console.log('Mouse Down {' + x + ', ' + y + '}');
    redraw(getSection(x, y));
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

    init(ctx);
});