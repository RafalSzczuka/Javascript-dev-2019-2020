const random = (range) => Math.floor(Math.random() * range.length);

const getRandomCard = (board) => {
  const index = random(board);
  return board[index];
};

module.exports = { random, getRandomCard };
