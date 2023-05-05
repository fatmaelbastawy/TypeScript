"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.point2d = void 0;
// // 1-
var test;
test = "fatma";
console.log(test);
test = 38;
console.log(test);
test = [10, 39, true, "str"];
console.log(test);
test = false;
console.log(test);
function getActions(btns) {
    console.log("hello".concat(btns.one));
    console.log("hello".concat(btns.two));
    console.log("hello".concat(btns.three));
}
;
getActions({ one: "fatma", two: 2, three: false });
// //enum
var Level;
(function (Level) {
    Level[Level["easy"] = 9] = "easy";
    Level[Level["med"] = 6] = "med";
    Level[Level["hard"] = 3] = "hard";
})(Level || (Level = {}));
var lvl = "easy";
// var lvl:string="med";
if (lvl === "easy") {
    console.log("the level is : ".concat(lvl, " & the no of seconds is : ").concat(Level.easy));
}
// else if(lvl==="med"){
//     console.log(`the level is : ${lvl} & the no of seconds is : ${Level.med}`)
// }
// else {
//     console.log(`the level is: ${lvl} & the no of seconds is: ${Level.hard}`)
// }
// //function
function devide(num1, num2) {
    return num1 / num2;
}
console.log(devide(20, 4));
function devide2(num1, num2) {
    num1 / num2;
}
console.log(devide(20, 4));
//  //generic fun
function ToDo(x) {
    void console.log(x);
}
var obj = ToDo({ name: "fatma", age: 25 });
console.log(ToDo);
var Student = /** @class */ (function () {
    function Student(_n, _a, _add) {
        this.name = _n;
        this.age = _a;
        this.address = _add;
    }
    // constructor(public _name:string,public _id:number,public _address:string)
    Student.prototype.getData = function () {
        console.log("Name: " + this.name + " ,Age: " + this.age + " ,Address: " + this.address);
    };
    return Student;
}());
var std1 = new Student("ali", 23, "sretyvunlkhfoyuyt");
std1.getData();
//2//sqrt(square(x)+square(y))
var point2d = /** @class */ (function () {
    function point2d(_x, _y) {
        this.d = .2;
        this.X = _x;
        this.Y = _y;
    }
    point2d.prototype.getLength = function () {
        return (Math.sqrt((Math.pow(this.X, 2) * this.d) + (Math.pow(this.Y, 2) * this.d)));
    };
    return point2d;
}());
exports.point2d = point2d;
var p2d = new point2d(20, 40);
var length = p2d.getLength();
console.log(length);
//3//sqrt(square(x)+square(y)+square(z))
var point3d = /** @class */ (function (_super) {
    __extends(point3d, _super);
    function point3d(_x, _y, _z) {
        var _this = _super.call(this) || this;
        _this.X = _x;
        _this.Y = _y;
        _this.Z = _z;
        return _this;
    }
    point3d.prototype.getLength = function () {
        return (Math.sqrt((Math.pow(this.X, 2) * this.d) + (Math.pow(this.Y, 2) * this.d) + (Math.pow(this.Z, 2) * this.d)));
    };
    return point3d;
}(point2d));
var p3d = new point3d(20, 40, 60);
console.log(p3d.getLength());
