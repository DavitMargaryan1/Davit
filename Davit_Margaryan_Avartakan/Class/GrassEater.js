class GrassEater{
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiply = 0;
        this.energy = 8;
        this.direction = []
    }

    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    chooseCell(character1,character2) {
        this.getNewCoordinates()
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0]
            var y = this.directions[i][1]
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character1 || matrix[y][x] == character2) {
                    found.push(this.directions[i])
                }
            }
        }
        return found;
    }

    eat(){
        let newCell = random(this.chooseCell(1,5))
        if(newCell){
            let x = newCell[0];
            let y = newCell[1];
            matrix[this.y][this.x] = 0;
            this.x = x;
            this.y = y;
            if(matrix[y][x] == 5){
                    matrix[this.y][this.x] = 5
                    posArr.push(new Pos(this.x,this.y))
                    for(let i = 0;i<grassEaterArr.length;i++){
                        if(grassEaterArr[i].x == x && grassEaterArr[i].y == y){
                            grassEaterArr.splice(i,1)
                        }
                    }
                }else{
                    matrix[this.y][this.x] = 2;
            for(let i = 0;i<grassArr.length;i++){
                if(grassArr[i].x == x && grassArr[i].y == y){
                    grassArr.splice(i,1)
                }
             }
          }
            this.energy++;
            if(this.energy>= 12){
                this.mul();
            }
        }
        else{
            this.move();
        }
    }

    move(){
        let newCell = random(this.chooseCell(0))
        if(newCell){
            let x = newCell[0];
            let y = newCell[1];
            matrix[this.y][this.x] = 0;
            this.x = x;
            this.y = y;
            matrix[this.y][this.x] = 2;
            this.energy--;
            if(this.energy <= 0){
                this.die()
            } 
        }
    }

    mul(){
        let newCell = random(this.chooseCell(0));
        if(newCell){
            let x = newCell[0];
            let y = newCell[1];
            matrix[y][x] = 2
            grassEaterArr.push(new GrassEater(x,y))
            this.energy = 8;
        }
    }
 
    die(){
        matrix[this.y][this.x] = 0;
        for(let i = 0;i<grassEaterArr.length;i++){
            if(grassEaterArr[i].x == this.x && grassEaterArr[i].y == this.y){
                grassEaterArr.splice(i,1)
            }
        }
    }
}
