document.addEventListener('DOMContentLoaded', appStart);

let canvas
let ctx
let myPs


function appStart() {
    myPs = new Photoshop('canvas');
    canvas = document.querySelector('canvas');

    // document
    //     .getElementById('canvas').style.cursor = "pointer";

    let btnColor = document.querySelector('#color');
    btnColor.addEventListener('change', () => myPs.setColorBrush(btnColor.value));

    let btnSize = document.querySelector('#size');
    btnSize.addEventListener('change', () => myPs.setSizeBrush(btnSize.value));

    let btnColorBackground = document.querySelector('#colorBackground');
    btnColorBackground.addEventListener('change', () => backgroundColor(btnColorBackground));

    document
        .querySelector('#btnRed')
        .addEventListener('click', () =>
            myPs.setSimpleColorBrush('colorRed'));
    document
        .querySelector('#btnYellow')
        .addEventListener('click', () =>
            myPs.setSimpleColorBrush('colorYellow'));
    document
        .querySelector('#btnBlack')
        .addEventListener('click', () =>
            myPs.setSimpleColorBrush('colorBlack'));
    document
        .querySelector('#btnGreen')
        .addEventListener('click', () =>
            myPs.setSimpleColorBrush('colorGreen'));
    document
        .querySelector('#btnBlue')
        .addEventListener('click', () =>
            myPs.setSimpleColorBrush('colorBlue'));

    document
        .querySelector('#btnSizeSmall')
        .addEventListener('click', () =>
            myPs.setSimpleSize('small'))
    document
        .querySelector('#btnSizeMedium')
        .addEventListener('click', () =>
            myPs.setSimpleSize('medium'))
    document
        .querySelector('#btnSizeLarge')
        .addEventListener('click', () =>
            myPs.setSimpleSize('large'))

    document
        .querySelector('#btnLoadImage')
        .addEventListener('click', () => loadImage());
    document
        .querySelector('#btnClear')
        .addEventListener('click', () =>
            clear());
    document
        .querySelector('#btnDarken')
        .addEventListener('click', () =>
            darkenFilter());
    document
        .querySelector('#btnBrightnes')
        .addEventListener('click', () =>
            brightnesFilter());
    document
        .querySelector('#btnFiltr1')
        .addEventListener('click', () =>
            Filtr1());
    document
        .querySelector('#btnFiltr2')
        .addEventListener('click', () =>
            Filtr2());
    document
        .querySelector('#btnHeart')
        .addEventListener('click', () =>
            myPs.setBrush('heart'));
    document
        .querySelector('#btnSquare')
        .addEventListener('click', () =>
            myPs.setBrush('square'));
    document
        .querySelector('#btnCircle')
        .addEventListener('click', () =>
            myPs.setBrush('circle'));
    document
        .querySelector('#btnEmptyCircle')
        .addEventListener('click', () =>
            myPs.setBrush('emptyCircle'));
    document
        .querySelector('#btnTransparentMode')
        .addEventListener('click', () =>
            myPs.setBrush('transparentMode'));
    document
        .querySelector('#btnNormalMode')
        .addEventListener('click', () =>
            myPs.setBrush('normalMode'));




    ctx = canvas.getContext('2d')

    drawImage()
    clear()
}


// function changeBrush(typeBrush) {
//     brushType = typeBrush;
// }


// function getBrush() {
//     const div = document.createElement('div');
//     div.classList.add('brush', `${brushType}-brush`);
//     return div;
// }



function drawImage() {
    const image = new Image()
    image.src = "zdjecie.jpg"
    image.addEventListener('load', () => {
        ctx.drawImage(image, 0, 0, ctx.canvas.width, ctx.canvas.height)
    })
}

function loadImage() {
    drawImage()
}


function clear() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}


function darkenFilter(amount = 10) //-sciemnia pixele i przepisuje na nowo do canvasa
{

    const canvasData = ctx.getImageData(0, 0, 900, 600)
    for (let i = 0; i < canvasData.data.length; i += 4) {
        canvasData.data[i] -= amount
        canvasData.data[i + 1] -= amount
        canvasData.data[i + 2] -= amount
    }
    ctx.putImageData(canvasData, 0, 0)
}

function brightnesFilter(amount = 10) //-rozjasnia pixele i przepisuje na nowo do canvasa
{
    const canvasData = ctx.getImageData(0, 0, 900, 600)
    for (let i = 0; i < canvasData.data.length; i += 4) {
        canvasData.data[i] += amount
        canvasData.data[i + 1] += amount
        canvasData.data[i + 2] += amount
    }
    ctx.putImageData(canvasData, 0, 0)
}

// function backgroundColor() //-Kolor tła
// {
//     const canvasData = ctx.getImageData(0, 0, 900, 600)
//     for (let i = 0; i < canvasData.data.length; i += 4) {
//         canvasData.data[i] += amount
//         canvasData.data[i + 1] += amount
//         canvasData.data[i + 2] += amount
//     }
//     ctx.putImageData(canvasData, 0, 0)
// }

function backgroundColor() //-Kolor tła 
{

    ctx.fillStyle = document.getElementById("colorBackground").value;
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)

}

function Filtr1() //-rozjasnia pixele i przepisuje na nowo do canvasa
{
    const canvasData = ctx.getImageData(0, 0, 900, 600)

    for (let i = 0; i < canvasData.data.length; i += 4) {
        red = canvasData.data[i] = 255
        green = canvasData.data[i + 1] = 100
        blue = canvasData.data[i + 2] = 100
        alpha = canvasData.data[i + 3] = 100
        // const rgba = (red + green + blue) / 3;
        // canvasData.data[i] = canvasData.data[i + 1] = canvasData.data[i + 2] = rgba;
    }
    ctx.putImageData(canvasData, 0, 0)
}