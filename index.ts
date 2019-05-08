// example 1
const myNum = 10;
const sName = 'Gundam';
const mydate = new Date();
console.log('myNum', typeof myNum);
console.log('sName', typeof sName);
console.log('mydate', typeof mydate);
console.log('mydate', mydate instanceof Date);
// example 2
// เช็ค type จาก object ที่ไม่เกิดจาก new
type Employee = { n: string, sn: string };
const employee: Employee = { n: 'Chulal', sn: 'Lisa' };
console.log('employee typeof', typeof employee);
console.log('employee is instanceof', employee instanceof Object);
const isEmployee = (e:any)=>e.sn!==undefined && e.n!==undefined;
console.log('employee checkByFn', isEmployee(employee));
console.log(employee.n !== undefined);
// example 3 arrow function
type PPloyFn = (no: string | number)=>string;
const executeFn: PPloyFn =
(ployNumber) => {
  if(typeof ployNumber === 'number'){
    ployNumber += 10;
    // convert number to string
    return ployNumber+'';
  }else{
    return `I'm ${ployNumber}`;
  }
}; 

const result2 = executeFn(10);
const result3 = executeFn('10');

console.log('result2',result2);
console.log('resukt3',result3);