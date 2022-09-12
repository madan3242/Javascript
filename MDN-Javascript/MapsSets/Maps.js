const saying = new Map();
//          key     value
saying.set('dog', 'woof');
saying.set('cat', 'meow');
saying.set('elephant', 'toot');

saying.size;
console.log(saying.size);

saying.get('dog');
console.log(saying.get('dog'));
console.log(saying.get('fox'));

saying.has('bird');
console.log(saying.has('bird'));
console.log(saying.has('dog'));

saying.delete('elephant');
console.log(saying.has('elephant'));

for (const [key, value] of saying){
    console.log(`${key} goes ${value}`);
}

saying.clear();

console.log(saying.size);