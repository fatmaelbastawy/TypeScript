// // 1-
var test:string|number|any[]|boolean;
test="fatma";
console.log(test);
test=38;
console.log(test);
test=[10,39,true,"str"];
console.log(test);
test=false;
console.log(test);

// //
type A={
    one:string,
    two:number
}

type B={
    three:boolean;
}

type mix= A & B;

function getActions(btns:mix){
    console.log(`hello${btns.one}`);
    console.log(`hello${btns.two}`);
    console.log(`hello${btns.three}`);
};
getActions({one:"fatma",two:2,three:false});


// //enum
enum Level{
    easy=9,
    med=6,
    hard=3
}
var lvl:string="easy";
// var lvl:string="med";
if(lvl==="easy"){
    console.log(`the level is : ${lvl} & the no of seconds is : ${Level.easy}`)
}

// else if(lvl==="med"){
//     console.log(`the level is : ${lvl} & the no of seconds is : ${Level.med}`)
// }
// else {
//     console.log(`the level is: ${lvl} & the no of seconds is: ${Level.hard}`)
// }

// //function

function devide(num1:Number,num2:Number):number{
   return num1/num2;
}
console.log(devide(20,4));

function devide2(num1:Number,num2:Number):void{
     num1/num2;
 }
 console.log(devide(20,4));

//  //generic fun

 function ToDo<T>(x:T){void
    console.log(x);
 }
var obj=ToDo({name:"fatma",age:25});
 console.log( ToDo);

 //class

//  class Student{ 
//     constructor(public _name:string,public _id:number,public _bd:Date){}
// }

// // class Student{ 
// //     Name:string;
// //     Id:number;
// //     BD:Date;

// //  constructor(_name:string,_id:number,_bd:Date){
// //     this.Name=_name;
// //     this.Id=_id;
// //     this.BD=_bd;
// //  } 
// // }

//  var std1=new Student("Ali",1,new Date(1990, 4, 7));
//  var std2=new Student("Ahmed",2,new Date(1991, 4, 7));
//  var std3=new Student("Mo",3,new Date(1992, 4, 7));

// console.log(std1);
// console.log(std2);
// console.log(std3);

// //interface
interface IPerson{
    name:string;
    age:number;
    getData():void;
}

interface IStudent extends IPerson{
    address:string;
}
class Student implements IStudent{

    name:string;
    age:number;
    address:string;
    constructor(_n:string,_a:number,_add:string){
        this.name=_n;
        this.age=_a;
        this.address=_add;
    }
    
    // constructor(public _name:string,public _id:number,public _address:string)
getData(): void {
    console.log("Name: "+this.name+" ,Age: "+this.age+" ,Address: "+this.address )
}
}
var std1=new Student("ali",23,"sretyvunlkhfoyuyt");
std1.getData();

//2//sqrt(square(x)+square(y))
 export class point2d{
    X:number;
    Y:number;
    d:number=.2;
    constructor(_x:number,_y:number){
        this.X=_x;
        this.Y=_y;
    }
    getLength():number{
        return (Math.sqrt((Math.pow(this.X,2)*this.d)+(Math.pow(this.Y,2)*this.d)))
    }
}
var p2d=new point2d(20,40);
var length=p2d.getLength();
console.log(length);

//3//sqrt(square(x)+square(y)+square(z))
class point3d extends point2d{
    X:number;
    Y:number;
    Z:number;
    constructor(_x:number,_y:number,_z:number){
        super();
        this.X=_x;
        this.Y=_y; 
        this.Z=_z;
        
    }
    getLength(): number {
        return (Math.sqrt((Math.pow(this.X,2)*this.d)+(Math.pow(this.Y,2)*this.d)+(Math.pow(this.Z,2)*this.d)))
    }
  
}
var p3d=new point3d(20,40,60);
console.log(p3d.getLength());