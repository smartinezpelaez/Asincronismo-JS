function * gen(){
    yield 1;
    yield 2;
    yield 3;
}

const g = gen();
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);


//Ejemplo 2
function* iterate(array){
    for (const value of array) {
        yield value;
    }
}
const it = iterate(['steven','Vanessa','Valeria','Thiago']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);