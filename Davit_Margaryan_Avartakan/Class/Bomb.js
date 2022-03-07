class Bomb{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.direction = [
            [this.x - 1,this.y - 1],
            [this.x    ,this.y - 1],
            [this.x + 1,this.y - 1],
            [this.x - 1,this.y    ],
            [this.x + 1,this.y    ],
            [this.x - 1,this.y + 1],
            [this.x    ,this.y + 1],
            [this.x + 1,this.y + 1]
        ]
    }



    chooseCell(character1,character2){
        var found = [];
        for (var i in this.direction) {
            var x = this.direction[i][0]
            var y = this.direction[i][1]
            
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character1 || matrix[y][x] == character2) {
                    found.push(this.direction[i])
                }
            }
        }
        return found;
    }



    boom(){
        let zoh = this.chooseCell(2,3)
        if(zoh.length > 0){
            matrix[this.y][this.x] = 5;
            for(let i = 0;i<bombArr.length;i++){
                if(bombArr[i].x == this.x && bombArr[i].y == this.y){
                    bombArr.splice(i,1)
                    break;
                }
            }
            posArr.push(new Pos(this.x,this.y))
            for(let i = 0;i<zoh.length;i++){
                let x = zoh[i][0];
                let y = zoh[i][1];
                matrix[y][x] = 0;
                for(let i = 0;i<grassEaterArr.length;i++){
                    if(grassEaterArr[i].x == x && grassEaterArr[i].y == y){
                        grassEaterArr.splice(i,1)
                        break
                    }
                }
                for(let i = 0;i<predatorArr.length;i++){
                    if(predatorArr[i].x == x && predatorArr[i].y == y){
                        predatorArr.splice(i,1)
                        break;
                    }
                }
            }     
        }
    }
}