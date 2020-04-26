function init(ctx) {
    // 테두리 그리기
    ctx.beginPath();
    ctx.rect(0, 0, 800, 800);
    ctx.stroke();

    let step = 10;
    for (let i = 0; i < step; i++) {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        ctx.fillStyle = 'rgb(' + r + ',' + g + ',' + b + ')';
        ctx.fillRect(i / 10 * 800, 0, 800 / step, 800);
    }
}

// 캔버스 위치로 부터 구역 반환
function getSection(x, y) {
    console.log('Section : ' + Math.floor(x / 80));
    return Math.floor(x / 80);
}

function redraw(section) {
    const $canvas = $('#canvas');
    const canvas = $canvas[0];
    const ctx = canvas.getContext('2d');

    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    ctx.fillStyle = 'rgb(' + r + ',' + g + ',' + b + ')';
    ctx.fillRect(section * 80, 0, 800 / 10, 800);
}

//캔버스 내의 마우스 이벤트 핸들러
function onMouseDown(x, y) {
    console.log('Mouse Down {' + x + ', ' + y + '}');
    redraw(getSection(x, y));
}

$(document).ready(() => {
    const $canvas = $('#canvas');
    const canvas = $canvas[0];
    const ctx = canvas.getContext('2d');

    $canvas.mousedown(function () {
        var x = event.x - $canvas.offset().left;
        var y = event.y - $canvas.offset().top;
        onMouseDown(x, y);
    });

    init(ctx);
});