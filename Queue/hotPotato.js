const Queue = require('./queue');


function hotPotato(elementsList, num) {
  const queue = new Queue();
  const elimitatedList = [];

  for(let i = 0; i < elementsList.length; i++) {
    queue.enqueue(elementsList[i]);
  };

  while(queue.size() > 1) {
    for(let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue());
    };
    elimitatedList.push(queue.dequeue());
  };
  return { eliminated: elimitatedList, winner: queue.dequeue()};
};

const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
const result = hotPotato(names, 7);

result.eliminated.forEach(name => {
  console.log(`${name} foi eliminado do jogo da Batata quente.`);
});

console.log(`O vencedor foi: ${result.winner}`);