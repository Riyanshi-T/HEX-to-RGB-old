//A = 10; B = 11; C = 12; D = 13; E = 14; F = 15
function generateVal() {
    var input = document.getElementById("HEX").value;
    if (input.startsWith('#')) {
        var redValue1 = input.slice(1, 2);
        var redValue2 = input.slice(2, 3);
        var greenValue1 = input.slice(3, 4);
        var greenValue2 = input.slice(4, 5);
        var blueValue1 = input.slice(5, 6);
        var blueValue2 = input.slice(6, 7);
    } else {
        redValue1 = input.slice(0, 1);
        redValue2 = input.slice(1, 2);
        greenValue1 = input.slice(2, 3);
        greenValue2 = input.slice(3, 4);
        blueValue1 = input.slice(4, 5);
        blueValue2 = input.slice(5, 6);
    }
    //redValue1 replacement
    switch (redValue1) {
        case "A":
        case "a":
            redValue1 = 10;
            break;
        case "B":
        case "b":
            redValue1 = 11;
            break;
        case "C":
        case "c":
            redValue1 = 12;
            break;
        case "D":
        case "d":
            redValue1 = 13;
            break;
        case "E":
        case "e":
            redValue1 = 14;
            break;
        case "F":
        case "f":
            redValue1 = 15;
            break;
        default:
            redValue1 = Number(redValue1);
    }
    // redValue2 replacement
    switch (redValue2) {
        case "A":
        case "a":
            redValue2 = 10;
            break;
        case "B":
        case "b":
            redValue2 = 11;
            break;
        case "C":
        case "c":
            redValue2 = 12;
            break;
        case "D":
        case "d":
            redValue2 = 13;
            break;
        case "E":
        case "e":
            redValue2 = 14;
            break;
        case "F":
        case "f":
            redValue2 = 15;
            break;
        default:
            redValue2 = Number(redValue2);
    }
    // greenValue1 replacement
    switch (greenValue1) {
        case "A":
        case "a":
            greenValue1 = 10;
            break;
        case "B":
        case "b":
            greenValue1 = 11;
            break;
        case "C":
        case "c":
            greenValue1 = 12;
            break;
        case "D":
        case "d":
            greenValue1 = 13;
            break;
        case "E":
        case "e":
            greenValue1 = 14;
            break;
        case "F":
        case "f":
            greenValue1 = 15;
            break;
        default:
            greenValue1 = Number(greenValue1);
    }
    // greenValue1 replacement
    switch (greenValue2) {
        case "A":
        case "a":
            greenValue2 = 10;
            break;
        case "B":
        case "b":
            greenValue2 = 11;
            break;
        case "C":
        case "c":
            greenValue2 = 12;
            break;
        case "D":
        case "d":
            greenValue2 = 13;
            break;
        case "E":
        case "e":
            greenValue2 = 14;
            break;
        case "F":
        case "f":
            greenValue2 = 15;
            break;
        default:
            greenValue2 = Number(greenValue2);
    }
    // blueValue1 replacement
    switch (blueValue1) {
        case "A":
        case "a":
            blueValue1 = 10;
            break;
        case "B":
        case "b":
            blueValue1 = 11;
            break;
        case "C":
        case "c":
            blueValue1 = 12;
            break;
        case "D":
        case "d":
            blueValue1 = 13;
            break;
        case "E":
        case "e":
            blueValue1 = 14;
            break;
        case "F":
        case "f":
            blueValue1 = 15;
            break;
        default:
            blueValue1 = Number(blueValue1);
    }
    // blueValue1 replacement
    switch (blueValue2) {
        case "A":
        case "a":
            blueValue2 = 10;
            break;
        case "B":
        case "b":
            blueValue2 = 11;
            break;
        case "C":
        case "c":
            blueValue2 = 12;
            break;
        case "D":
        case "d":
            blueValue2 = 13;
            break;
        case "E":
        case "e":
            blueValue2 = 14;
            break;
        case "F":
        case "f":
            blueValue2 = 15;
            break;
        default:
            blueValue2 = Number(blueValue2);
    }
    if (input.startsWith('#')) {
        document.getElementById('initialinput').innerHTML = input;
    } else {
        document.getElementById('initialinput').innerHTML = '#' + input;
    }
    // document.getElementById('test').innerHTML = redValue1 + ' ' + redValue2 + ' ' + greenValue1 + ' ' + greenValue2 + ' ' + blueValue1 + ' ' + blueValue2;
    // document.getElementById('type').innerHTML = typeof(redValue1) + ' ' + typeof(redValue2) + ' ' + typeof(greenValue1) + ' ' + typeof(greenValue2) + ' ' +typeof(blueValue1) + ' ' +typeof(blueValue2);
    var totalRed = redValue1 * 16 + redValue2;
    var totalGreen = greenValue1 * 16 + greenValue2;
    var totalBlue = blueValue1 * 16 + blueValue2;
    document.getElementById('finalResult').innerHTML = 'RGB(' + totalRed + ', ' + totalGreen + ', ' + totalBlue + ')';
    document.getElementById('redcalc').innerHTML = 'Red = ' + redValue1 + ' &#10005 16 + ' + redValue2 + ' &#10005 1';
    document.getElementById('greencalc').innerHTML = 'Green = ' + greenValue1 + ' &#10005 16 + ' + greenValue2 + ' &#10005 1';
    document.getElementById('bluecalc').innerHTML = 'Blue = ' + blueValue1 + ' &#10005 16 + ' + blueValue2 + ' &#10005 1';
    document.getElementById('previewtag').innerHTML = 'Color Preview:';
    document.getElementById('colpreview').style.backgroundColor = 'RGB(' + totalRed + ', ' + totalGreen + ', ' + totalBlue + ')';
}