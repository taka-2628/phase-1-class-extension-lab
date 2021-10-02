class Polygon{
    constructor(sides){
        this.sides = sides
    }
    get countSides(){
        return this.sides.length
    }
    get perimeter(){
        return this.sides.reduce(function(prevVal, currVal){
            return prevVal + currVal
        })
    }
}

class Triangle extends Polygon{
    // valid triangle - has 3 sides and sum of the lengths of any two sides of a triangle is greater than the length of the third side
    get isValid(){
        if (this.sides.length != 3){
            return false
        }
        if (this.sides[0] + this.sides[1] > this.sides[2] && this.sides[0] + this.sides[2] > this.sides[1] && this.sides[1] + this.sides[2] > this.sides[0]){
            return true
        } else {
            return false
        }
    }
}

class Square extends Polygon{
    // valid triangle - has 4 sides and the lengths of all sides are equal.
    get isValid(){
        if (this.sides.length !=4){
            return false
        }
        if (this.sides[0] === this.sides[1] && this.sides[1] === this.sides[2] && this.sides[2] === this.sides[3]){
            return true
        } else {
            return false
        }
    }
    get area(){
        return this.sides[0] * this.sides[1]
    }
}

