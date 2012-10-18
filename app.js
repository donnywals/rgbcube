$(document).ready(function(){
    var cFront = getCanvas("cube-front");
    var cLeft = getCanvas("cube-left");
    var cBack = getCanvas("cube-back");
    var cRight = getCanvas("cube-right");
    var cTop = getCanvas("cube-top");
    var cBottom = getCanvas("cube-bottom");
    
    var r       = 0;
    var g       = 0;
    var b       = 0;
    
    fillCubeFace(cLeft, {
        colors: {
            r: 0,
            g: 0,
            b: 0
        }, axis: {
            x: "r",
            y: "b"
        }
    });
    fillCubeFace(cBottom, {
        colors: {
            r: 0,
            g: 0,
            b: 0
        }, axis: {
            x: "g",
            y: "b"
        }
    });
    fillCubeFace(cRight, {
        colors: {
            r: 0,
            g: 255,
            b: 0
        }, axis: {
            x: "r",
            y: "b"
        }
    });
    fillCubeFace(cTop, {
        colors: {
            r: 255,
            g: 0,
            b: 0
        }, axis: {
            x: "g",
            y: "b"
        }
    });
    fillCubeFace(cBack, {
        colors: {
            r: 0,
            g: 0,
            b: 255
        }, axis: {
            x: "r",
            y: "g"
        }
    });
    fillCubeFace(cFront, {
        colors: {
            r: 0,
            g: 0,
            b: 0
        }, axis: {
            x: "r",
            y: "g"
        }
    });
});

function fillCubeFace(c, options) {
    for(var i = 0; i<255; i++) {
        options.colors[options.axis.x] = i;
        for(var j = 0; j<255; j++) {
            options.colors[options.axis.y] = j;
            c.fillStyle = "rgb("+options.colors.r+", "+options.colors.g+", "+options.colors.b+")";
            c.fillRect(i, j, 10, 10);
        }
    }
}

function getCanvas(element) {
    var c = document.getElementById(element);
    c.width = c.height = 254;
    return c.getContext("2d");
}