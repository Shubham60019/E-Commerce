let create=document.createElement('div');
console.log(create);
create.innerText="hello"


let head= document.createElement('h3')
console.log(head);
head.innerText="hi"


// create.append(head)
// create.append("hello");


create.appendChild(head);
// create.appendChild("hello");  //error


let a =document.createElement('h2');
console.log(a);
a.innerText="hi";
a.id="text";
a.className="demo";

document.body.append(a)

// let v=document.getElementById('test');
// console.log(v);
// v.style.color="red";

let v = document.getElementsByClassName('demo');
console.log(v);
v[0].style.color="red";

// let f= document.querySelector('#test');
// console.log(f);   //null