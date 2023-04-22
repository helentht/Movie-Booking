const container = document.querySelector(".booking-container");
const countElement = document.getElementById("count");
const priceElement = document.getElementById("price");
const allSeats = document.querySelectorAll(".row .seat:not(.occupied)");
const movieChooser = document.getElementById("movie");

let ticketPrice = +movieChooser.value;

function refresh() {
  const localChosen = JSON.parse(localStorage.getItem("selectedSeats"));
  if (localChosen !== null && localChosen.length > 0) {
    allSeats.forEach((seat, i) => {
      if (localChosen.indexOf(i) > -1) {
        seat.classList.add("selected");
      }
    });
  }
  if (localStorage.getItem("selectedMovieIndex") !== null) {
    movieChooser.selectedIndex = localStorage.getItem("selectedMovieIndex");
  }
  if (price !== null && localChosen !== null) {
    countElement.innerText = localChosen.length;
    priceElement.innerText =
      localChosen.length * +localStorage.getItem("selectedMoviePrice");
  }
}

refresh();

function chooseMovie(index, price) {
  localStorage.setItem("selectedMovieIndex", index);
  localStorage.setItem("selectedMoviePrice", price);
}

function updateSeats() {
  const localChosen = document.querySelectorAll(".row .selected");
  const seatsIndex = [...localChosen].map((seat) =>
    [...allSeats].indexOf(seat)
  );
  localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));
  const count = localChosen.length;
  countElement.innerText = count;
  priceElement.innerText = count * ticketPrice;
}

container.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");
    updateSeats();
  }
});

movieChooser.addEventListener("change", (e) => {
  ticketPrice = +e.target.value;
  chooseMovie(e.target.selectedIndex, e.target.value);
  updateSeats();
});
