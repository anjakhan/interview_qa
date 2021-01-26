const questions = [{id: 1, question: "Who is your hero?"}, {id: 2, question: "If you could live anywhere, where would it be?"}, {id: 3, question: "What is your biggest fear?"}, {id: 4, question: "What is your favorite family vacation?"}, {id: 5, question: "What would you change about yourself if you could?"}, {id: 6, question: "What really makes you angry?"}, {id: 7, question: "What motivates you to work hard?"}, {id: 8, question: "What is your favorite thing about your career?"}, {id: 9, question: "What is your biggest complaint about your job?"}, {id: 10, question: "What is your proudest accomplishment?"}, {id: 11, question: "What is your child's proudest accomplishment?"}, {id: 12, question: "What is your favorite book to read?"}, {id: 13, question: "What makes you laugh the most?"}, {id: 14, question: "What was the last movie you went to? What did you think?"}, {id: 15, question: "What did you want to be when you were small?"}, {id: 16, question: "What does your child want to be when he/she grows up?"}, {id: 17, question: "If you could choose to do anything for a day, what would it be?"}, {id: 18, question: "What is your favorite game or sport to watch and play?"}, {id: 19, question: "Would you rather ride a bike, ride a horse, or drive a car?"}, {id: 20, question: "What would you sing at Karaoke night?"}, {id: 21, question: "What two radio stations do you listen to in the car the most?"}, {id: 22, question: "Which would you rather do: wash dishes, mow the lawn, clean the bathroom, or vacuum the house?"}, {id: 23, question: "If you could hire someone to help you, would it be with cleaning, cooking, or yard work?"}, {id: 24, question: "If you could only eat one meal for the rest of your life, what would it be?"}, {id: 25, question: "Who is your favorite author?"}, {id: 26, question: "Have you ever had a nickname? What is it?"}, {id: 27, question: "Do you like or dislike surprises? Why or why not?"}, {id: 28, question: "In the evening, would you rather play a game, visit a relative, watch a movie, or read?"}, {id: 29, question: "Would you rather vacation in Hawaii or Alaska, and why?"}, {id: 30, question: "Would you rather win the lottery or work at the perfect job? And why?"}, {id: 31, question: "Who would you want to be stranded with on a deserted island?"}, {id: 32, question: "If money was no object, what would you do all day?"}, {id: 33, question: "If you could go back in time, what year would you travel to?"}, {id: 34, question: "How would your friends describe you?"}, {id: 35, question: "What are your hobbies?"}, {id: 36, question: "What is the best gift you have been given?"}, {id: 37, question: "What is the worst gift you have received?"}, {id: 38, question: "Aside from necessities, what one thing could you not go a day without?"}, {id: 39, question: "List two pet peeves."}, {id: 40, question: "Where do you see yourself in five years?"}, {id: 41, question: "How many pairs of shoes do you own?"}, {id: 42, question: "If you were a super-hero, what powers would you have?"}, {id: 43, question: "What would you do if you won the lottery?"}, {id: 44, question: "What form of public transportation do you prefer? (air, boat, train, bus, car, etc.)"}, {id: 45, question: "What's your favorite zoo animal?"}, {id: 46, question: "If you could go back in time to change one thing, what would it be?"}, {id: 47, question: "If you could share a meal with any 4 individuals, living or dead, who would they be?"}, {id: 48, question: "How many pillows do you sleep with?"}, {id: 49, question: "What's the longest you've gone without sleep (and why)?"}, {id: 50, question: "What's the tallest building you've been to the top in?"}, {id: 51, question: "Would you rather trade intelligence for looks or looks for intelligence?"}, {id: 52, question: "How often do you buy clothes?"}, {id: 53, question: "Have you ever had a secret admirer?"}, {id: 54, question: "What's your favorite holiday?"}, {id: 55, question: "What's the most daring thing you've ever done?"}, {id: 56, question: "What was the last thing you recorded on TV?"}, {id: 57, question: "What was the last book you read?"}, {id: 58, question: "What's your favorite type of foreign food?"}, {id: 59, question: "Are you a clean or messy person?"}, {id: 60, question: "Who would you want to play you in a movie of your life?"}, {id: 61, question: "How long does it take you to get ready in the morning?"}, {id: 62, question: "What kitchen appliance do you use every day?"}, {id: 63, question: "What's your favorite fast food chain?"}, {id: 64, question: "What's your favorite family recipe?"}, {id: 65, question: "Do you love or hate rollercoasters?"}, {id: 66, question: "What's your favorite family tradition?"}, {id: 67, question: "What is your favorite childhood memory?"}, {id: 68, question: "What's your favorite movie?"}, {id: 69, question: "How old were you when you learned Santa wasn't real? How did you find out?"}, {id: 70, question: "Is your glass half full or half empty?"}, {id: 71, question: "What's the craziest thing you’ve done in the name of love?"}, {id: 72, question: "What three items would you take with you on a deserted island?"}, {id: 73, question: "What was your favorite subject in school?"}, {id: 74, question: "What's the most unusual thing you've ever eaten?"}, {id: 75, question: "Do you collect anything?"}, {id: 76, question: "Is there anything you wished would come back into fashion?"}, {id: 77, question: "Are you an introvert or an extrovert?"}, {id: 78, question: "Which of the five senses would you say is your strongest?"}, {id: 79, question: "Have you ever had a surprise party? (that was an actual surprise)"}, {id: 80, question: "Are you related or distantly related to anyone famous?"}, {id: 81, question: "What do you do to keep fit?"}, {id: 82, question: "Does your family have a “motto” – spoken or unspoken?"}, {id: 83, question: "If you were ruler of your own country what would be the first law you would introduce?"}, {id: 84, question: "Who was your favorite teacher in school and why?"}, {id: 85, question: "What three things do you think of the most each day?"}, {id: 86, question: "If you had a warning label, what would yours say?"}, {id: 87, question: "What song would you say best sums you up?"}, {id: 88, question: "What celebrity would you like to meet at Starbucks for a cup of coffee?"}, {id: 89, question: "Who was your first crush?"}, {id: 90, question: "What's the most interesting thing you can see out of your office or kitchen window?"}, {id: 91, question: "On a scale of 1-10 how funny would you say you are?"}, {id: 92, question: "Where do you see yourself in 10 years?"}, {id: 93, question: "What was your first job?"}, {id: 94, question: "If you could join any past or current music group which would you want to join?"}, {id: 95, question: "How many languages do you speak?"}, {id: 96, question: "What is your favorite family holiday tradition?"}, {id: 97, question: "Who is the most intelligent person you know?"}, {id: 98, question: "If you had to describe yourself as an animal, which one would it be?"}, {id: 99, question: "What is one thing you will never do again?"}, {id: 100, question: "Who knows you the best?"}];

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
	const icon = document.createElement("div");
	icon.innerHTML = `<span class="top"><i class="fa fa-gear big"></i><i class="fa fa-gear small"></i></span><span class="bottom"><i class="fa fa-gear small"></i><i class="fa fa-gear big"></i></span>`

	flipCardBack.appendChild(icon);
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