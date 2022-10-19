// Promises
// console.log("person1: shows the ticket");
// console.log("person2: shows ticket");

// const promiseWifeBringsTicks = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("ticket");
//   }, 3000);
// });

// const getPopcorn = promiseWifeBringsTicks.then((t) => {
//   console.log("Wife: I hvae the tickets");
//   console.log("Husband: we should go in");
//   console.log("wife:no i am hungary");
//   return new Promise((resolve, reject) => resolve(`${t} popcorn`));
// });

// getPopcorn.then((t) => console.log(t));

// const getButter = getPopcorn.then((t) => {
//   console.log("Husband : I got some popcorn");
//   console.log("husband we should go in");
//   console.log("wife i need butter on my Popcorn");
//   return new Promise((resolve, reject) => {
//     `${t} butter`;
//   });
// });

getButter.then((t) => console.log(t));

console.log("person1 shows ticket");
console.log("person2 shows ticket");

const preMovie = async () => {
  const person3PromiseToShowTicketWhenWifeArrives = new Promise(
    (resolve, reject) => {
      setTimeout(() => resolve("ticket"), 3000);
    }
  );
  const getPopcorn = new Promise((resolve, reject) => {
    setTimeout(() => resolve("popcorn"), 3000);
  });

  const addButter = new Promise((resolve, reject) => {
    setTimeout(() => resolve("butter"), 3000);
  });

  const getColdDrinks = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Cold Drink"), 3000);
  });

  let ticket = await person3PromiseToShowTicketWhenWifeArrives;

  console.log(`got the ${ticket}`);
  console.log(`Husband:we should go in now`);
  console.log(`Wife: "i am hungry"`);

  let popcorn = await getPopcorn;
  console.log(`Husband: here is ${popcorn}`);
  console.log(`Husband:we should go in now`);
  console.log(`Wife: "I dont like popcorn without butter!"`);

  let butter = await addButter;
  console.log(`added ${butter}`);

  let coldDrink = await getColdDrinks;
  console.log(`Got the ${coldDrink}`);

  console.log(`Husband:Anything else darling`);
  console.log(`Wife: lets go we are going to miss the preivew`);
  console.log(`Husband: thanks for the reminder *grin*`);

  return ticket;
};

preMovie().then((t) => console.log(`person4 shows ${t}`));

console.log("person4 shows ticket");
