class Pos extends LivingCreature{
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