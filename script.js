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
	}
];

const nav = document.querySelector('nav');
const restart = document.querySelector('#restart');
const button = document.querySelector('button');
const spinner = document.querySelector('#spinner');
const deck = document.querySelector("#deck");
let i = 0;

const turn = () => {
	const text = document.querySelector(".text");
	const card = document.querySelector("#card");
	const turnCard = document.querySelector('#turn-card')

	text.textContent = questions[i].question;
	turnCard.style.transform = "rotateY(180deg)";

	card.innerHTML = "";

	[...deck.children].forEach(element => {
		card.insertAdjacentElement('beforeEnd', element);
	});
	
	if (i === questions.length-1) {
		deck.innerHTML = "";
		deck.style.cursor = "default"
	} else {
		deck.innerHTML = `
			<div class="flip-card-inner" id="turn-card">
                <div class="flip-card-front" style="cursor:pointer;">
                </div>
                <div class="flip-card-back">
                    <span class="top"><i class="fa fa-gear big"></i><i class="fa fa-gear small"></i></span>
                    <p class="text"> </p>
                    <span class="bottom"><i class="fa fa-gear small"></i><i class="fa fa-gear big"></i></span>
                </div>
            </div>`;
	}
	
	i++;
};

deck.addEventListener("click", turn);

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
}

const refresh = () => {
	nav.classList.toggle("hidden");
	i = 0;
	card.innerHTML = '';
	deck.innerHTML = `
			<div class="flip-card-inner" id="turn-card">
                <div class="flip-card-front" style="cursor:pointer;">
                </div>
                <div class="flip-card-back">
                    <span class="top"><i class="fa fa-gear big"></i><i class="fa fa-gear small"></i></span>
                    <p class="text"> </p>
                    <span class="bottom"><i class="fa fa-gear small"></i><i class="fa fa-gear big"></i></span>
                </div>
            </div>`;
}

button.addEventListener("mouseenter", spin);
button.addEventListener("mouseleave", unspin);
button.addEventListener("click", openNav);
restart.addEventListener("click", refresh);