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

const deck = document.querySelector("#deck");
let i = 0;

const turn = () => {
	const text = document.querySelector(".text");
	const card = document.querySelector("#card");

	text.textContent = questions[i].question;
	document.getElementById("turn-card").style.transform = "rotateY(180deg)";

	card.innerHTML = '';

	[...deck.children].forEach(element => {
		card.insertAdjacentElement('beforeEnd', element);
	});
	
	if (i === questions.length-1) {
		deck.innerHTML = '';
	} else {
		deck.innerHTML = `
			<div class="flip-card-inner" id="turn-card">
	            <div class="flip-card-front">
	            </div>
	            <div class="flip-card-back">
	                <a href="https://www.vecteezy.com/free-vector/technical" class="top"><img src="assets/img/gears.svg"></a>
	                <p class="text"> </p>
	                <a href="https://www.vecteezy.com/free-vector/technical" class="bottom"><img src="assets/img/gears.svg"></a>
	            </div>
	        </div>`;
	}
	
	i++;
}

deck.addEventListener("click", turn);