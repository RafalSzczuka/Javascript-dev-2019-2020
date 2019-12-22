let object = {
  quotes: [
    {
      quote: "dupdfgdfga3",
      author: "koejlosadasdas2",
      id: 1,
      group: "huje"
    },
    {
      quote: "dupdfgdfga3",
      author: "koejlosadasdas2",
      id: 2,
      group: "huje"
    },
    {
      quote: "dupdfgdfga3",
      author: "koejlosadasdas2",
      id: 3,
      group: "huje"
    }
  ]
};

let filtered = object.quotes.filter(element => {
  return element.id == 2;
});
console.log(object.quotes.indexOf(filtered));
