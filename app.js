const plus = document.querySelectorAll(".plus-icon");
const minus = document.querySelectorAll(".minus-icon");
const question = document.querySelectorAll(".question");
const answer = document.querySelectorAll(".answer");

let totalIndex = question.length;

let counter = 0;

function updateUi(index) {
	plus[index].classList.toggle("hidden");
	minus[index].classList.toggle("hidden");
	answer[index].classList.toggle("hidden");
}

let expanded = -1;

function expandUi(element, index) {
	element.addEventListener("click", () => {
		if (counter > 0) {
			updateUi(expanded);
			expanded = -1;
			counter = 0;
		}
		expanded = index;
		updateUi(index);
		counter++;
	});
}

function toggleQuestion(element, index) {
	element.addEventListener("click", () => {
		// if (index === expanded) {
		// 	updateUi(index);
		// 	console.log(`index== ${index}`);
		// 	console.log(`expanded== ${expanded}`);
		// 	console.log(`counter== ${counter}`);
		// 	expanded = -1;
		// 	counter = 0;
		// } else if (counter > 0) {
		// 	updateUi(expanded);
		// 	console.log(`index> ${index}`);
		// 	console.log(`expanded> ${expanded}`);
		// 	console.log(`counter> ${counter}`);
		// 	expanded = -1;
		// 	counter = 0;
		// } else {
		// 	expanded = index;
		// 	updateUi(index);
		// 	counter++;
		// 	console.log(`index ${index}`);
		// 	console.log(`expanded ${expanded}`);
		// 	console.log(`counter ${counter}`);
		// }
	});
}

function minimizeUi(element, index) {
	element.addEventListener("click", () => {
		updateUi(index);
		counter--;
	});
}

function toggleUi() {
	for (let index = 0; index < totalIndex; index++) {
		expandUi(plus[index], index);
		minimizeUi(minus[index], index);

		toggleQuestion(question[index], index);
	}
}

toggleUi();
