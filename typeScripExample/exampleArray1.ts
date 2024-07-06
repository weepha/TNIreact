//สร้างและเข้าถึง array
let numbers : number[]=[10,20,30,40,50];
console.log(numbers[2]); //30
//การใช้งาน loop ร่วมกับ array
let names : string[]=['Alice','Bob','Chsrlie'];
for( let name of names){
    console.log(name);

 
}

//การดพิ่มเเละการลบข้อมูล array(push,pop)
let fruits:string[]=["Apple","Banana"];
fruits.push("Cherry")
console.log(fruits);
fruits.pop();
console.log(fruits)