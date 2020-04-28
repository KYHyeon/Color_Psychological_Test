var stages = {
    1: {
        svgs: {
            road_svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 799.5 516.5"><defs><style>.cls-1{fill:none;stroke:#000;stroke-miterlimit:10;}</style></defs><title>road</title><g id="l" data-name="l"><g id="l" data-name="l"><path class="cls-1" d="M799,0C799,232.15,441.63,420,0,420"/><path class="cls-1" d="M799,297c0,121.05-150.28,219-336,219"/><path class="cls-1" d="M799,181C799,366.17,441.63,516,0,516"/></g></g></svg>',
            sun: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 155.04 155.04"><defs><style>.cls-1{fill:#fff;}</style></defs><title>sun</title><g id="l" data-name="l"><g id="l" data-name="l"><circle class="cls-1" cx="77.52" cy="77.52" r="77.02"/><path d="M77.52,1A76.52,76.52,0,1,1,1,77.52,76.61,76.61,0,0,1,77.52,1m0-1A77.52,77.52,0,1,0,155,77.52,77.52,77.52,0,0,0,77.52,0Z"/><circle class="cls-1" cx="77.71" cy="77.58" r="74.32" transform="translate(-11.32 141.86) rotate(-80.78)"/><path d="M77.71,3.76A73.82,73.82,0,1,1,3.89,77.58,73.91,73.91,0,0,1,77.71,3.76m0-1a74.82,74.82,0,1,0,74.82,74.82A74.82,74.82,0,0,0,77.71,2.76Z"/></g></g></svg>',
            tree: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 312 538.7"><defs><style>.cls-1{fill:#fff;}</style></defs><title>tree</title><g id="l" data-name="l"><g id="l" data-name="l"><path class="cls-1" d="M136,538.16c-2.73-3.85-4.24-10.78-6.53-24.59-4.73-28.57-3.1-60.41-1.53-91.2.79-15.43,1.54-30,1.54-44.21V261.44l-.81.63c-13.56,10.54-31.37,16.35-50.14,16.35-20.39,0-39.44-6.69-53.64-18.83C8.94,245.93.5,226.53.5,203.49a77.31,77.31,0,0,1,7.26-33.75l.1-.21-.1-.22A77.5,77.5,0,0,1,.5,135.49C.5,112.46,9,93.06,25,79.38,39.27,67.21,58.38,60.5,78.81,60.5h1l.07-.42C87.38,18.93,123.92.5,156.8.5c17.75,0,34.79,5.26,48,14.82C219.49,26,229,41.44,232.21,60.11l.08.43h.43c.7,0,1.39,0,2.09,0,36.94,0,76.69,23.47,76.69,75a79.63,79.63,0,0,1-7,33.72l-.1.21.1.21a80.08,80.08,0,0,1,7,33.86c0,23.25-8.3,42.71-24,56.28-13.91,12-32.71,18.65-52.95,18.65h0c-18.39,0-36.05-5.59-49.73-15.72l-.73-.54-.07.91c-.75,10-1.52,21.61-1.52,31.74V530.18Z"/><path d="M156.8,1c17.64,0,34.59,5.23,47.71,14.73,14.58,10.55,24,25.93,27.21,44.47l.15.85.86,0c.69,0,1.38,0,2.08,0,20.07,0,38.71,6.57,52.46,18.5C302.79,93,311,112.32,311,135.49A79,79,0,0,1,304.06,169l-.19.42.19.42A79.47,79.47,0,0,1,311,203.49c0,51.13-39.63,74.43-76.45,74.43-18.28,0-35.83-5.55-49.43-15.62l-1.46-1.08-.14,1.81c-.75,10-1.52,21.64-1.52,31.78v235l-45.75,7.85c-2.57-3.82-4-10.7-6.26-24.12-4.73-28.52-3.1-60.33-1.53-91.09.79-15.44,1.54-30,1.54-44.24V260.42l-1.61,1.26c-13.48,10.47-31.18,16.24-49.84,16.24-20.27,0-39.21-6.65-53.32-18.71C9.38,245.65,1,226.39,1,203.49A76.77,76.77,0,0,1,8.21,170l.2-.43-.2-.43A77,77,0,0,1,1,135.49c0-22.88,8.41-42.14,24.33-55.73C39.51,67.66,58.5,61,78.81,61h1.38l.15-.83a68.38,68.38,0,0,1,27.93-44.27C121.76,6.29,139,1,156.8,1m0-1c-35,0-70.17,20.25-77.44,60h-.55C39.54,60,0,85.51,0,135.49a78,78,0,0,0,7.3,34,77.78,77.78,0,0,0-7.3,34c0,50,39.37,75.43,78.55,75.43,18.17,0,36.3-5.46,50.45-16.46v115.7c0,43.21-7.06,92.87,0,135.5,2.24,13.54,3.79,21,6.8,25l47.2-8.1V294.81c0-9.53.66-20.31,1.52-31.71,14.2,10.52,32.14,15.82,50,15.82,38.82,0,77.45-24.91,77.45-75.43,0-13.08-2.57-24.42-7-34.07a79.94,79.94,0,0,0,7-33.93C312,84.82,273.54,60,234.81,60q-1,0-2.1,0c-7-40.26-41.35-60-75.91-60Z"/></g></g></svg>',
        }
    }
};

function load_stage(n) {
    project.clear();
    for (var svg in stages[n]['svgs']) {
        project.importSVG(stages[n]['svgs'][svg]);
    }
}

var hitOptions = {
    segments: true,
    stroke: true,
    fill: true,
    tolerance: 5
};

function onMouseDown(event) {
    var hitResult = project.hitTest(event.point, hitOptions);
    if (!hitResult)
        return;

    console.log(hitResult);

    hitResult.item.strokeColor = Color.random();
    hitResult.item.fillColor = Color.random();
}

load_stage(1);

// Palette Code
for (var i = 600; i <= 650; i += 50) {
    for (var j = 50; j < 750; j += 50) {
        new Path.Circle(new Point(j, i), 10).fillColor = Color.random();
    }
}