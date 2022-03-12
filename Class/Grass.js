class Grass extends LivingCreature{
    
    mul(){
        var azatkordinatner = this.chooseCell(0);
        var newCell = random(azatkordinatner);
        if(newCell && this.multiply >= 3){
            var x = newCell[0];
            var y = newCell[1];
            matrix[y][x] = 1;
            grassArr.push(new Grass(x,y))
            this.multiply = 0;
        }
        this.multiply++
    }
}