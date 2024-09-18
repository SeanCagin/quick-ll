import { LinkedList } from "./linked-list.js";

let linkedList = new LinkedList();

for (let i = 0; i < 10; i++) {
  linkedList.prepend(i);
}

console.log(linkedList.toString());
console.log(linkedList.at(7));
console.log(linkedList.pop());
console.log(linkedList.append(11).toString());
console.log(linkedList.find(3));
console.log(linkedList.contains(69));
console.log(linkedList.insertAt(17, 3).toString());
console.log(linkedList.removeAt(5));
console.log(linkedList.toArray());
let newList = linkedList.clone();
console.log(newList.toArray());
console.log(newList === linkedList);

export default linkedList;
