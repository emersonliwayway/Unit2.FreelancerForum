// ==Plan==
// create array of initial freelancers (each an object)
// create arrays for possible names/occupations
// render initial array
// generate and render new freelancer
// every time a new freelancer is added the average price is recalculated/updated

// ==State==
const names = [
  "Yoshi",
  "Mario",
  "Luigi",
  "Princess Peach",
  "Toad",
  "Bowser",
  "Daisy",
];

const occupations = [
  "Barista",
  "Artist",
  "Game Developer",
  "Graphic Designer",
  "Librarian",
  "Web Developer",
  "Cosmetic Chemist",
];

const freelancers = [
  { name: "Alice", occupation: "Writer", price: 30 },
  { name: "Bob", occupation: "Teacher", price: 50 },
  { name: "Carol", occupation: "Programmer", price: 70 },
];

const maxFreelancers = 10;

// generate random freelancer and add to freelancers array
function newPerson() {
  const name = names[Math.floor(Math.random() * names.length)];
  const occupation =
    occupations[Math.floor(Math.random() * occupations.length)];
  // returns random integer between 20 and 80
  const price = Math.floor(Math.random() * (80 - 20 + 1));

  //   add to freelancers array
  freelancers.push({ name, occupation, price });

  if (freelancers.length >= maxFreelancers) {
    clearInterval(addInterval);
  }
}

// ==Render==
// function render() {
//   const table = document.querySelector("#table");
//   const elements = freelancers.map((freelancer) => {
//     const element = document.createElement("tr");
//     for (const key in freelancer) {
//       const cell = document.createElement("td");
//       cell.textContent = `${freelancer[key]}`;
//       element.appendChild(cell);
//     }
//     return element;
//   });
//   table.replaceChildren(...elements);
// }

//==Render==
function render() {
  const page = document.querySelector("#list");
  const list = freelancers.map((person) => {
    const freeList = document.createElement("ul");
    const line = document.createElement("li");
    const line2 = document.createElement("li");
    const line3 = document.createElement("li");
    line.textContent = `Name: ${person.name}`;
    line2.textContent = `Occupation: ${person.occupation}`;
    line3.textContent = `Starting Price: $${person.price}`;
    freeList.append(line, line2, line3);
    return freeList;
  });
  page.replaceChildren(...list);
  averagePrice();
}

// average price
// when a new freelancer is added this function is called and number is updated
function averagePrice() {
  const total = freelancers.reduce((sum, person) => {
    sum += person.price;
    return sum;
  }, 0);
  const average = total / freelancers.length;
  const averageFixed = average.toFixed(2);
  const showPrice = document.querySelector("#price");
  showPrice.textContent = `The average starting price is: $${averageFixed}`;
}

// ==Script==
const addInterval = setInterval(() => {
  newPerson();
  render();
}, 3000);

// for initial array
render();
