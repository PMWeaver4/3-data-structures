class circle {
    constructor(radius){
        this.circleRadius = radius;
    }
    getArea(){
        return (Math.PI *this.circleRadius ** 2).toFixed(2);
    }
    getCircumference(){
        retrun (2 * Math.PI * this.circleRadius).toFixed(2);
    }
}

let circle1 = new circle(2);
console.log(circle1.getArea());

