let mem = [
  { figure: "%", id: 1 },
  { figure: "#", id: 2 },
];

// let check = mem.filter((c) => c.id === 3).length;

let card = { figure: "#", id: 1 };

const checkIfCardInMemory = (card, memory) => {
  let check = memory.filter((c) => c.id === card.id).length;

  if (check !== 0) {
    return true;
  } else {
    return false;
  }
};

console.log(checkIfCardInMemory(card, mem));
