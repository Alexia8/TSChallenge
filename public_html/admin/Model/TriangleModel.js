/*ﬁ 
 * @author alexiacdura
 * eslint-env jqueryﬁﬁ
 
 * Model class that represents the Triangle to be created
 * @returns Object {TriangleModel}
 */
var TriangleModel = function () {
    this.triangle = [];
    this.types = ["Equilateral", "Isosceles", "Scalene"];
    this.generateTriangleEvent = new Event(this);
};

TriangleModel.prototype = {
    /*
     * Void fucntion simulates constructor of the class
     * will populate sides array with given input by the user
     * @param {number} side1 -> length of first side of triangle 
     * @param {number} side2 -> length of second side of triangle 
     * @param {number} side3 -> length of third side of triangle 
     * 
     */
    generateTriangle: function (side1, side2, side3) {
        this.triangle.push({
            side1: side1,
            side2: side2,
            side3: side3
        });
        this.generateTriangleEvent.notify();
    },

    /*
     * Return Function that will rerturn the type of triangle after comparing each side
     * @returns String {type} ﬁ
     */
    getType: function () {
        if (this.triangle[0].side1 === this.triangle[0].side2 && this.triangle[0].side2 === this.triangle[0].side3) {
            console.log(this.types[0]);
            console.log(this.triangle[0]);
            return this.types[0];
        } else if (this.triangle[0].side1 === this.triangle[0].side2 || this.triangle[0].side1 === this.triangle[0].side3 || this.triangle[0].side2 === this.triangle[0].side3) {
            console.log(this.types[1]);
            return this.types[1];
        } else {
            console.log(this.types[2]);
            return this.types[2];
        }
    }
    
    

};