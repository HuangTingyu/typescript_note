# TS变量说明

### JS类型

```js
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
let tuple: [string, number, boolean];
tuple = ["a", 2, false];
// 7.定义对象
let obj:object
obj = {name:'Lison'}
```

注意，对象的定义并没有那么简单，如果此时输入`obj.name` 会报错。



