/*Насать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет
есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.*/

const strObj =  (str,obj) => {
  let key = false;
  if (str in obj) key = true
  console.log(key);
}

const obj = {
  a: 100,
  b: 'string',
  c: 1221,
}

strObj ('a',obj)