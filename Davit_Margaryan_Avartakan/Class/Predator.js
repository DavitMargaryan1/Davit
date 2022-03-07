class Predator{
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

    chooseCell(character) {
        this.getNewCoordinates()
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0]
            var y = this.directions[i][1]
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i])
                }
            }
        }
        return found;
    }

    eat(){
        let newCell = random(this.chooseCell(2))
        if(newCell){
            let x = newCell[0];
            let y = newCell[1];
            matrix[this.y][this.x] = 0;
            this.x = x;
            this.y = y;
            matrix[this.y][this.x] = 3;
            for(let i = 0;i<grassArr.length;i++){
                if(grassEaterArr[i].x == x && grassEaterArr[i].y == y){
                    grassEaterArr.splice(i,1)
                    break
                }
            }
            this.energy++;
            if(this.energy >= 12){
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
            matrix[this.y][this.x] = 3;
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
            this.x = x;
            this.y = y;
            matrix[this.y][this.x] = 3
            predatorArr.push(new Predator(x,y))
            this.energy = 8;
        }
    }
 
    die(){
        matrix[this.y][this.x] = 0;
        for(let i = 0;i<predatorArr.length;i++){
            if(predatorArr[i].x == this.x && predatorArr[i].y == this.y){
                predatorArr.splice(i,1)
                break;
            }
        }
    }
}