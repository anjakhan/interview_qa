const questions = [
	{
		id: 1,
		question: 'What was the most challenging project in your career?'
	}, {
		id: 2,
		question: 'What would you change in our company?'
	}, {
		id: 3,
		question: 'How does the internet work?'
	}, {
		id: 4,
		question: 'What was the most challenging project in your career?'
	}, {
		id: 5,
		question: 'What would you change in our company?'
	}, {
		id: 6,
		question: 'How does the internet work?'
	}
];

const nav = document.querySelector('nav');
const restart = document.querySelector('#restart');
const button = document.querySelector('button');
const spinner = document.querySelector('#spinner');
const cardDeck = document.querySelector('#card-deck')
let i = 0;

const createCard = () => {
	const flipCard = document.createElement("div");
	flipCard.setAttribute("class", "flip-card");
	flipCard.setAttribute("id", `card${i}`);
	const flipCardInner = document.createElement("div");
	flipCardInner.setAttribute("class", "flip-card-inner");
	flipCardInner.setAttribute("id", `inner${questions[i].id}`);
	const flipCardFront = document.createElement("div");
	flipCardFront.setAttribute("class", "flip-card-front");
	const flipCardBack = document.createElement("div");
	flipCardBack.setAttribute("class", "flip-card-back");
	const text = document.createElement("p");
	text.setAttribute("class", "text");
	text.textContent = questions[i].question;

	flipCardBack.appendChild(text);
	flipCardInner.appendChild(flipCardFront);
	flipCardInner.appendChild(flipCardBack);
	flipCard.appendChild(flipCardInner);
	cardDeck.appendChild(flipCard);

	flipCard.style.zIndex = 1000-i;
};

const move = () => {
	const flipper = document.querySelector(`#card${i}`);
	const flipCardInner = document.querySelector(`#inner${questions[i].id}`);

	flipCardInner.style.transform = "rotateY(180deg)";

	flipper.animate([
		{ transform: "translateX(360px)" }
	], {
		fill: "forwards",
		delay: 400,
		duration: 1000,
		easing: "ease-in-out"
	});

	flipper.style.zIndex = 1000+i;

	document.querySelector("#inner1").style.boxShadow = "3px 3px 15px black";

	i++;
	createCard();
};

const spin = () => {
	button.classList.toggle("spin");
	spinner.classList.toggle("fa-spin");
};

const unspin = () => {
	button.classList.toggle("spin");
	spinner.classList.toggle("fa-spin");
};

const openNav = () => {
	nav.classList.toggle("hidden");
	button.style.outline = "inherit";
};

const refresh = () => {
	nav.classList.toggle("hidden");
	i = 0;
	cardDeck.innerHTML = "";
	createCard();
};

createCard();
cardDeck.addEventListener("click", move);
button.addEventListener("mouseenter", spin);
button.addEventListener("mouseleave", unspin);
button.addEventListener("click", openNav);
restart.addEventListener("click", refresh);