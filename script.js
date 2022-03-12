var matrix = [];
var said = 50;
var grassArr = []
var grassEaterArr = []
var predatorArr = []
var bombArr = []
var posArr = []
function generator(height, width, meker, erkusner, ereqner, chorser, hinger) {
    for (let y = 0; y < height; y++) {
        matrix.push([])
        for (let x = 0; x < width; x++) {
            matrix[y].push(0)
        }
    }
    for (let i = 0; i < meker; i++) {
        let y = Math.round(Math.random() * (height - 1))
        let x = Math.round(Math.random() * (width - 1))
        matrix[y][x] = 1
        grassArr.push(new Grass(x, y))
    }
    for (let i = 0; i < erkusner; i++) {
        let y = Math.round(Math.random() * (height - 1))
        let x = Math.round(Math.random() * (width - 1))
        matrix[y][x] = 2
        grassEaterArr.push(new GrassEater(x, y))
    }
    for (let i = 0; i < ereqner; i++) {
        let y = Math.round(Math.random() * (height - 1))
        let x = Math.round(Math.random() * (width - 1))
        matrix[y][x] = 3
        predatorArr.push(new Predator(x, y))
    }
    for (let i = 0; i < chorser; i++) {
        let y = Math.round(Math.random() * (height - 1))
        let x = Math.round(Math.random() * (width - 1))
        matrix[y][x] = 4
        bombArr.push(new Bomb(x, y))
    }
    for (let i = 0; i < hinger; i++) {
        let y = Math.round(Math.random() * (height - 1))
        let x = Math.round(Math.random() * (width - 1))
        matrix[y][x] = 5
        posArr.push(new Pos(x, y))
    }
}
function setup() {
    frameRate(2)
    generator(20, 20, 10, 10, 5, 2, 2);
    createCanvas(matrix[0].length * said, matrix.length * said)
    background("gray")
    alert("Բարև ձեզ։ Ձեր դատին եմ հանձնում իմ ծրագրավորած խաղը։Խաղը բաղկացած է խոտերից,խոտակերներից,գիշատիչներից,բոմբերից և փոսերից։Խոտերը,խոտակերները,գիշատիչները՝ բազմանում են։Խոտակերները ուտում են խոտերին,գիշատիչները ուտում են խոտակերներին։Բոմբերը պայթում են,եթե նրանց շրջակա ութ վանդակներից մեկում լինի՝ խոտակեր կամ գիշատիչ։Պայթելուց հետո բոմբը դառնում է փոս,խոտակերները և գիշատիչները սատկում են։Երբ խոտակերները խոտ են ուտում, տեսնելով փոսը մտածում են, որ խոտ է, բայց իրականում թակարտ է,ընկնում են փոսը և սատկում։Վերջում եթե չի մնում ոչ խոտ, ոչ խոտակեր,ոչ գիշատիչ ապա փոսերը ավելանում են և փակում են դաշտը։")
}

function draw() {
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green");
                rect(x * said, y * said, said, said)
            } else if (matrix[y][x] == 0) {
                fill("gray")
                rect(x * said, y * said, said, said)
            } else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * said, y * said, said, said)
            } else if (matrix[y][x] == 3) {
                fill("orange");
                rect(x * said, y * said, said, said)
            } else if (matrix[y][x] == 4) {
                fill("red")
                rect(x * said, y * said, said, said)
            } else if (matrix[y][x] == 5) {
                fill("black")
                rect(x * said, y * said, said, said)
                posArr.push(new Pos(x, y))
            }
        }
    }

    for (var i = 0; i < grassArr.length; i++) {
        grassArr[i].mul();
    }

    for (let i in grassEaterArr) {
        grassEaterArr[i].eat()
    }

    for (let i in predatorArr) {
        predatorArr[i].eat()
    }

    for (let i in bombArr) {
        bombArr[i].boom()
    }

    for (let i in posArr) {
        posArr[i].mul()
    }
}

