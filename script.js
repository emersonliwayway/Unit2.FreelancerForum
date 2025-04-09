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

const tableHeader = ["Name", "Occupation", "Starting Price"];

// generate random freelancer and add to freelancers array
function newPerson() {
  const name = names[Math.floor(Math.random() * names.length)];
  const occupation =
    occupations[Math.floor(Math.random() * occupations.length)];
  // returns random integer between 20 and 80
  const price = Math.floor(Math.random() * 81) + 1;

  //   add to freelancers array
  freelancers.push({ name, occupation, price });
}

// ==Render==
function render() {
  const table = document.querySelector("#table");
  const elements = freelancers.map((freelancer) => {
    const element = document.createElement("tr");
    for (const key in freelancer) {
      const cell = document.createElement("td");
      cell.textContent = `${freelancer[key]}`;
      element.appendChild(cell);
    }
    // element.textContent = `${freelancer.name} ${freelancer.occupation} $${freelancer.price}`;
    return element;
  });
  table.replaceChildren(...elements);
}

// average price
// when a new freelancer is added this function is called and number is updated
function averagePrice() {}

// ==Script==
const addInterval = setInterval(() => {
  newPerson();
  averagePrice();
  render();
}, 4000);

// for initial array
render();
averagePrice();

// generate new freelancer randomly including price

// render array on page function

// calculate and update average price function
