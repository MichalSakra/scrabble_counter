class Player {
  constructor(name) {
    this.name = name;
    this.scoreTable = [];
    let createPlayer = this.createBoard();
    this.score = this.addScore();
  }

  add() {
    this.points = 0;
    for (let i = 0; i < this.scoreTable.length; i++) {
      this.points += this.scoreTable[i];
    }
    return this.points;
  }

  addScore() {
    this.btn.addEventListener("click", e => {
      e.preventDefault();
      this.scoreTable.push(Number(this.input.value));

      this.addToList();
    });
  }

  addToList() {
    this.list.innerHTML = "";

    this.scoreTable.forEach((item, index) => {
      let li = document.createElement("li");
      li.textContent = this.scoreTable[index];

      this.list.appendChild(li);
      li.dataset.index = index;
      let result = (this.playerScore.textContent = "Result: " + this.add());
      this.input.value = "";

      const btnReset = document.createElement("button");
      li.appendChild(btnReset);
      btnReset.setAttribute("title", "Double click to delete");
      btnReset.innerHTML = '<i class="far fa-trash-alt"></i>';
      btnReset.addEventListener("dblclick", e => {
        let index = e.target.parentNode.parentNode.dataset.index;
        console.log(index);
        index = Number(index);
        this.scoreTable.splice(index, 1);
        this.addToList();
        this.playerScore.textContent = "Result: " + this.add();
      });
    });
  }

  randomName() {
    const names = [
      "Simona",
      "Anton",
      "Jonny",
      "Jo",
      "Hilary",
      "Danny",
      "Sam",
      "Harrison",
      "Pipi",
      "Lola",
      "Fiona",
      "Samantha",
      "Nicolas",
      "Shaquile",
      "Yoko",
      "Samuel",
      "Alex",
      "Mbutu"
    ];

    const i = Math.floor(Math.random() * names.length);

    return names[i];
  }

  createBoard() {
    const wrapper = document.querySelector(".board");
    this.wrap = document.createElement("div");
    this.wrap.classList.add("player-wrapper");
    wrapper.appendChild(this.wrap);

    this.playerName = document.createElement("h2");

    this.name ? this.name : (this.name = this.randomName());
    this.playerName.textContent = this.name;
    this.wrap.appendChild(this.playerName);

    this.form = document.createElement("form");
    this.btn = document.createElement("button");
    this.btn.setAttribute("class", "addBtn");
    this.btn.textContent = " add ";

    this.input = document.createElement("input");
    this.input.setAttribute("type", "number");
    this.input.setAttribute("min", "0");
    this.input.setAttribute("placeholder", "score");

    this.form.appendChild(this.input);
    this.form.appendChild(this.btn);
    this.wrap.appendChild(this.form);

    this.playerScore = document.createElement("h3");
    this.playerScore.textContent = "Result: 0";
    this.wrap.appendChild(this.playerScore);

    this.list = document.createElement("ol");
    this.wrap.appendChild(this.list);

    const playersMenu = (document.getElementById("players-menu").style.display =
      "none");
  }
}

class Game {
  constructor() {
    this.players = document.getElementById("number-of-players");
    this.playersWrapper = document.querySelector(".players-name-wrapper>form");
    this.playersBtn = document.querySelector("form#players-number>button");
    this.playersBtn.addEventListener("click", this.submitPlayers.bind(this));
  }
  submitPlayers(event) {
    event.preventDefault();

    document.querySelector(".players-name-wrapper").style.display = "block";
    this.playersWrapper.innerHTML = "";
    const playersValue = this.players.value;

    for (let i = 1; i <= playersValue; i++) {
      const input = document.createElement("input");
      input.setAttribute("class", "input-player-name");
      input.setAttribute("type", "text");
      input.setAttribute("placeholder", `Player ${i}`);
      this.playersWrapper.appendChild(input);
    }
    const btn = document.createElement("button");
    btn.textContent = "play";

    btn.classList.add("submit");
    this.playersWrapper.appendChild(btn);

    this.submit();
  }
  submit() {
    const playerArray = [];

    const inputs = document.querySelectorAll("form#submit>input");
    const btnEnter = document.querySelector("button.submit");

    btnEnter.addEventListener("click", function(event) {
      event.preventDefault();

      for (let i = 0; i < inputs.length; i++) {
        playerArray.push(inputs[i].value);
      }
      playerArray.forEach((player, index) => {
        let person = new Player(player);
      });
    });
  }
}

const game = new Game();
