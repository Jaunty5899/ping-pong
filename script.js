const buttons = document.querySelectorAll("button");
const span1 = document.querySelector("#p1");
const span2 = document.querySelector("#p2");
const rounds = document.querySelector("#round");
let p1 = 0,
  p2 = 0,
  round = 0;
rounds.addEventListener("input", () => {
  round = rounds.value;
  if (round != "") rounds.disabled = true;
});
buttons.forEach((e) => {
  e.addEventListener("click", () => {
    if (p1 + p2 != round && round != "") {
      if (e.id == "one") p1++;
      else if (e.id == "two") p2++;
    }
    if (e.id == "reset") {
      p1 = 0;
      p2 = 0;
      rounds.disabled = false;
    }
    span1.innerText = p1;
    span2.innerText = p2;
    span1.style.color = p1 > p2 ? "green" : "red";
    span2.style.color = p2 > p1 ? "green" : "red";
    if (p1 == p2) {
      span1.style.color = "black";
      span2.style.color = "black";
    }
  });
});