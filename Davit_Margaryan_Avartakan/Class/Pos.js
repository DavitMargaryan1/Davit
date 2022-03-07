class Pos{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x    , this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y    ],
            [this.x + 1, this.y    ],
            [this.x - 1, this.y + 1],
            [this.x    , this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    chooseCell(character){
        var found = []
        for(var i in this.directions){
            var x = this.directions[i][0]
            var y = this.directions[i][1]
            if(x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length){
                if(matrix[y][x] == character){
                  found.push(this.directions[i])
                }
            }
        }
        return found;
    }

    mul(){
        var azatkordinatner = this.chooseCell(0);
        var newCell = random(azatkordinatner);
        if(newCell && grassArr.length == 0 && grassEaterArr.length == 0 && predatorArr.length == 0){
            var x = newCell[0];
            var y = newCell[1];
            matrix[y][x] = 5;
            posArr.push(new Pos(x,y))
        }
    }
}