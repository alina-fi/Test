
function init() {
    //-----------------------------------------------------
    //-----------------DISPLAY PHOTO-----------------------
    //-----------------------------------------------------
    var desiredWidth;

    $(document).ready(function() {
        console.log('onReady');
        $("#takePictureField").on("change",gotPic);
        desiredWidth = window.innerWidth;

        if(!("url" in window) && ("webkitURL" in window)) {
            window.URL = window.webkitURL;
        }

    });

//Credit: https://www.youtube.com/watch?v=EPYnGFEcis4&feature=youtube_gdata_player
    function gotPic(event) {
        if(event.target.files.length == 1 &&
            event.target.files[0].type.indexOf("image/") == 0) {
            $("#yourimage").attr("src",URL.createObjectURL(event.target.files[0]));
        }
    }


    //-------------------------------------------------------
    //-----------------DOMINANT COLOR-----------------------
    //-------------------------------------------------------

    //-----------------------------------------------------
    //-----------------DRAW PATH---------------------------
    //-----------------------------------------------------

    var stage = new Kinetic.Stage({
        container: 'container',
        width: 500,
        height: 500,
        fill: 'red'
    });
    var layer = new Kinetic.Layer();

    var body = new Kinetic.Shape({
        drawFunc: function (ctx){
            // Body
            ctx.beginPath();
            ctx.moveTo(387.6, 58.0);
            ctx.bezierCurveTo(364.4, 22.0, 310.2, 0.5, 264.6, 24.4);
            ctx.bezierCurveTo(219.1, 48.4, 212.7, 88.3, 205.6, 153.0);
            ctx.bezierCurveTo(198.4, 217.7, 172.0, 244.0, 150.5, 277.5);
            ctx.bezierCurveTo(85.8, 324.6, 56.8, 290.2, 12.3, 318.3);
            ctx.bezierCurveTo(-18.0, 337.4, 15.5, 371.8, 50.7, 354.2);
            ctx.bezierCurveTo(25.1, 373.4, 59.6, 392.4, 98.6, 367.0);
            ctx.bezierCurveTo(116.8, 355.1, 139.8, 340.8, 165.9, 288.2);
            ctx.bezierCurveTo(179.2, 295.8, 201.0, 305.7, 231.9, 311.1);
            ctx.bezierCurveTo(287.0, 320.7, 354.1, 305.5, 394.8, 229.6);
            ctx.bezierCurveTo(419.6, 183.3, 424.6, 115.3, 387.6, 58.0);
            ctx.closePath();
            ctx.stroke();
            ctx.restore();
            ctx.fillStrokeShape(this);

        },
        fill:'grey',
        strokeWidth:3
    });

    var wing = new Kinetic.Shape({
        drawFunc: function (ctx){

            // Wing
            ctx.beginPath();
            ctx.moveTo(313.9, 124.3);
            ctx.bezierCurveTo(317.8, 94.7, 280.7, 72.2, 254.2, 101.3);
            ctx.bezierCurveTo(227.8, 130.4, 221.8, 212.4, 136.2, 233.6);
            ctx.bezierCurveTo(220.5, 259.9, 299.2, 271.9, 337.9, 207.8);
            ctx.bezierCurveTo(370.1, 154.4, 343.6, 108.2, 313.9, 124.3);
            ctx.closePath();
            ctx.stroke();
            ctx.fillStrokeShape(this);

        },
        fill:'grey',
        strokeWidth:3
    });

    var rightLeg = new Kinetic.Shape({
        drawFunc: function (ctx){

            // right Leg
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(310.6, 307.4);
            ctx.bezierCurveTo(317.4, 307.9, 322.6, 310.3, 327.7, 313.2);
            ctx.bezierCurveTo(323.7, 301.7, 313.9, 302.1, 305.2, 305.3);
            ctx.lineTo(305.2, 283.6);
            ctx.lineTo(299.9, 283.6);
            ctx.lineTo(299.9, 307.6);
            ctx.bezierCurveTo(296.1, 307.9, 292.2, 310.1, 291.1, 311.8);
            ctx.bezierCurveTo(301.1, 308.5, 309.4, 324.6, 309.4, 329.1);
            ctx.bezierCurveTo(311.5, 318.8, 309.3, 312.7, 304.1, 310.3);
            ctx.bezierCurveTo(309.0, 311.4, 314.3, 314.1, 315.8, 322.9);
            ctx.bezierCurveTo(318.5, 315.7, 316.1, 309.4, 310.6, 307.4);
            ctx.closePath();
            ctx.stroke();
            ctx.fillStrokeShape(this);
        },
        fill:'grey',
        strokeWidth:3
    });

    var leftLeg = new Kinetic.Shape({
        drawFunc: function (ctx){

            // left Leg
            ctx.beginPath();
            ctx.moveTo(289.4, 313.8);
            ctx.bezierCurveTo(296.6, 314.3, 302.1, 316.9, 307.5, 319.9);
            ctx.bezierCurveTo(303.2, 307.7, 292.9, 308.2, 283.6, 311.6);
            ctx.lineTo(283.6, 288.5);
            ctx.lineTo(278.0, 288.5);
            ctx.lineTo(278.0, 314.0);
            ctx.bezierCurveTo(274.0, 314.3, 269.8, 316.6, 268.6, 318.5);
            ctx.bezierCurveTo(279.3, 314.9, 288.1, 332.0, 288.1, 336.8);
            ctx.bezierCurveTo(290.3, 325.9, 288.0, 319.4, 282.5, 316.9);
            ctx.bezierCurveTo(287.7, 318.0, 293.3, 320.9, 294.9, 330.2);
            ctx.bezierCurveTo(297.8, 322.6, 295.3, 315.9, 289.4, 313.8);
            ctx.closePath();
            ctx.stroke();
            ctx.fillStrokeShape(this);

        },
        fill:'grey',
        strokeWidth:3
    });


    var eye = new Kinetic.Shape({
        drawFunc: function (ctx){

            // Eye
            ctx.beginPath();
            ctx.moveTo(333.9, 39.4);
            ctx.bezierCurveTo(324.9, 38.2, 316.5, 40.0, 311.7, 47.8);
            ctx.bezierCurveTo(306.9, 55.5, 307.5, 63.3, 308.7, 68.7);
            ctx.bezierCurveTo(299.8, 53.7, 305.7, 24.4, 333.9, 39.4);
            ctx.closePath();
            ctx.stroke();
            ctx.fillStrokeShape(this);

        },
        fill:'grey',
        strokeWidth:3
    });

    var beak = new Kinetic.Shape({
        drawFunc: function (ctx){

            // Beak
            ctx.beginPath();
            ctx.moveTo(384.0, 33.7);
            ctx.lineTo(385.6, 1.0);
            ctx.lineTo(360.4, 20.2);
            ctx.lineTo(359.2, 40.6);
            ctx.lineTo(383.2, 50.2);
            ctx.lineTo(411.9, 43.0);
            ctx.lineTo(384.0, 33.7);
            ctx.closePath();
            ctx.stroke();
            ctx.fillStrokeShape(this);

        },
        fill:'grey',
        strokeWidth:3
    });

    var cheek = new Kinetic.Shape({
        drawFunc: function (ctx){

            ctx.beginPath();
            ctx.moveTo(356.4, 76.5);
            ctx.bezierCurveTo(356.4, 88.6, 346.6, 98.5, 334.5, 98.5);
            ctx.bezierCurveTo(322.4, 98.5, 312.5, 88.6, 312.5, 76.5);
            ctx.bezierCurveTo(312.5, 64.4, 322.4, 54.5, 334.5, 54.5);
            ctx.bezierCurveTo(346.6, 54.5, 356.4, 64.4, 356.4, 76.5);
            ctx.closePath();
            ctx.stroke();
            ctx.fillStrokeShape(this);

        },
        fill:'grey',
        strokeWidth:3
    });

    var cheekSelected = false;
    var bodySelected = false;

    cheek.on('mousedown touchstart',function(){
        if (cheekSelected === false){
            this.setFill('red');
            cheekSelected = true;
            layer.draw();
        }else{
            cheekSelected = false;
            this.setFill('grey');
            layer.draw();
        }

    });

    body.on('mousedown touchstart',function(){
        if (bodySelected === false){
            this.setFill('red');
            bodySelected = true;
            layer.draw();
        }else{
            bodySelected = false;
            this.setFill('grey');
            layer.draw();
        }

    });






    // add the shape to the layer
    layer.add(body);
    layer.add(wing);
    layer.add(rightLeg);
    layer.add(leftLeg);
    layer.add(eye);
    layer.add(beak);
    layer.add(cheek);

    // add the layer to the stage
    stage.add(layer);
}


function onClick() {

        $('#takePictureField').click();

}

//-------------------------------------------------------
//-----------------IMAGE CAROUSSEL-----------------------
//-------------------------------------------------------







