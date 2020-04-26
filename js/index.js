$(document).ready(() => {
    const canvas = $('#canvas')[0];
    const ctx = canvas.getContext('2d');
    // 무지개 만들기
    //fillRect(x좌표, y좌표, 가로크기, 세로크기)
    ctx.fillStyle = 'rgb(255,0,0)';
    ctx.fillRect(0, 0, 50, 100);
    ctx.fillStyle = 'rgb(255,100,0)';
    ctx.fillRect(50, 0, 50, 100);
    ctx.fillStyle = 'rgb(255,255,0)';
    ctx.fillRect(100, 0, 50, 100);
    ctx.fillStyle = 'rgb(0,255,0)';
    ctx.fillRect(150, 0, 50, 100);
    ctx.fillStyle = 'rgb(0,255,0)';
    ctx.fillRect(150, 0, 50, 100);
    ctx.fillStyle = 'rgb(0,0,255)';
    ctx.fillRect(200, 0, 50, 100);
    ctx.fillStyle = 'rgb(0,0,100)';
    ctx.fillRect(250, 0, 50, 100);
    ctx.fillStyle = 'rgb(255,0,255)';
    ctx.fillRect(300, 0, 50, 100);
    //아래 정의된 캔버스의 크기를 오버할 경우 짤린다.
});