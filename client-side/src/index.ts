let a:number = 123
const h1 = document.createElement('h1')
h1.innerHTML = 'bacra'
document.body.appendChild(h1)

// 1.定义数值类型
let num:number = 123
// 2.定义布尔类型
let bool:boolean = false
// 3.定义字符串类型
let str:string = 'bacra'
const first = "bacra"
const last = "wu"
str = `${first}${last}`
console.log(str)
// 4.定义undefined和null
let u:undefined = undefined
let n:null = null
// 5.typescript定义数组的方式
let list1:number[] = [1,2,3]
let list2:Array<number> = [1,2,3]
// 6.定义数组元素类型
let arr: [string, number, boolean];
arr = ["a", 2, false];
// 7.定义对象
let obj:object
obj = {name:'Lison'}

// --------------------------------
// TS补充的6种类型
// 1.元组
let tuple : [string,number,boolean];
tuple = ["bacra",1103,true]
// 定义接口tuple
interface Tuple extends Array<number|string>{
    0:string;
    1:number;
    length:2;
}
// 2.枚举
enum Roles{
    SUPER_ADMIN,
    ADMIN,
    USER
}
console.log(Roles.SUPER_ADMIN ,Roles.ADMIN, Roles.USER)
// 输出结果 —— 0,1,2

// 可以修改起始数值
enum Roles2{
    SUPER_ADMIN=1,
    ADMIN,
    USER
}
console.log(Roles2.SUPER_ADMIN ,Roles2.ADMIN, Roles2.USER)
// 输出结果 —— 1,2,3
console.log(Roles2[3])
// 输出结果 —— USER

// 3.Any
// value 可以为任意类型
let value:any;
value = 123
value = "abc"
value = false

const arr2 : any[] = [1,'a',true]

// 4.void类型的变量只能赋值为 undefined 和 null
// 定义函数，函数没有返回值的时候可以用void
const consoleText = (text:string):void =>{
    console.log(text)
}

// 5.never类型是不存在值的类型，抛出异常可以使用
// never类型是所有类型的子类型，它可以赋值给任何类型
// 但是，不能给never类型的变量赋值
const errorFunc = (message:string):never =>{
    throw new Error(message)
}

// 6.unknown

// 7.交叉类型
const merge = <T, U>(arg1:T,arg2:U):T&U =>{
    let res = <T & U>{}; // 这里指定返回值类型，兼备T和U两个类型变量代表的类型特点
    res = Object.assign(arg1,arg2) // 这里使用Object.assgin方法，返回一个合并后的对象
    return res
}
const info1 = {
    name:'lison'
}
const info2 = {
    age:18
}
const lisonInfo = merge(info1,info2)
lisonInfo.age = 20
console.log(info2.age)
console.log(lisonInfo.name,lisonInfo.age)

// Object.assgin也可以合并多个对象
// 注意：在Object.assgin返回的对象中修改某个对象的属性，
// 原来用来合并的对象也会受到影响

// 8.联合类型
const getLength = (content:string|number):number => {
    if(typeof content === "string") return content.length;
    else return content.toString().length;
}
console.log(getLength("abc"))
console.log(getLength(123))



