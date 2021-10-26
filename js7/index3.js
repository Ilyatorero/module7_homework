/*Задание 3.
Написать функцию, которая создает пустой объект, но без прототипа.*/

function func() {
    const obj = Object.create(null);         
    console.log(Object.getPrototypeOf(obj)); 
  }
  
  func();