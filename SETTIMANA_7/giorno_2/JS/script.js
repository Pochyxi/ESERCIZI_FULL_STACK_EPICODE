class Persona {
constructor(name, age) {
this._name = name;
this._age = age;
}

get age(){
    return this._age;
}
get name(){
    return this._name;
}


compareAge(obj){
    let e = this.age;
    let oggetto = obj.age;

    if(e < oggetto){
        console.log(`${this.name} e più piccolo di ${obj.name}`);
        } else if ( e == oggetto) {
        console.log(`${this.name} e coetaneo a ${obj.name}`);
        } else {
        console.log(`${this.name} e più grande di ${obj.name}`);

        }
    }
}

let p1 = new Persona("Flavio", 30);
let p2 = new Persona("Marco", 25);
let p3 = new Persona("Franco", 43);

p1.age = 50;
console.log(p1.age);
console.log(p1.age);

p1.compareAge(p2);
p1.compareAge(p3);
