// Задание 1

/*Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все 
 ключи и значения только собственных свойств. Данная функция не должна возвращать значение.*/

const user = {

    name: 'Andrei',

    surname: 'Ivanov',

    age: 18,

    position: 'developer',

};

function getKey() {
  for (let key in user) {
    if (user.hasOwnProperty(key)) {
        console.log(`${key}`+ ":" + user[key]); 
    }   
  }
}

getKey();