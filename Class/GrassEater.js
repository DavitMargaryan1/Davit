class GrassEater extends LivingCreature{
    constructor(x, y) {
        super(x,y)
        this.energy = 8;
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
        return super.chooseCell(character1,character2)
        
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
