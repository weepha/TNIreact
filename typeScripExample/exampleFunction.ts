interface Person{
    name:string;
    age:number;
}
//create array of Person objects
const people:Person[]=[
    {name: "John Lee",age :30},
    {name: "Marry Burner",age:25},
    {name: "Harry Kill",age:35}
]
function filterAdults(person:Person[]):Person[]{
    return person.filter(person=>person.age>=30);
}
const adults = filterAdults(people);
console.log(adults);