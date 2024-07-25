// write code here
const array = [
    { id: 1, name: 'Pepsi' },
    { id: 2, name: 'Mirinda' },
    { id: 3, name: 'Coke' },
    { id: 4, name: 'Fanta' },
    { id: 5, name: 'Sprite' }
  ];

  let result = array.filter(x => x.id != 4);
  console.log(result);