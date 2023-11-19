const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const textareaInput = document.querySelector('#msg');
const btn = document.querySelector('.contact__form-btn');
const popup = document.querySelector('.popup');
const errorMsg = document.querySelectorAll('.contact__form-err');
const errorText = document.querySelectorAll('.error-text');

const showError = (input, msg) => {
	errorMsg.forEach((el) => {
		input.classList.add('error');
	});

	errorText.forEach((el) => {
		input.nextElementSibling.classList.add('visible');
		input.nextElementSibling.textContent = msg;
	});
};

const clearError = (input) => {
	errorMsg.forEach((el) => {
		input.classList.remove('error');
		input.nextElementSibling.classList.remove('visible');
	});
};

const checkForm = (input) => {
	console.log(input);

	input.forEach((el) => {
		if (el.value === '') {
			showError(el, el.placeholder);
		} else {
			clearError(el);
		}
	});
};

const checkLength = (input, min) => {
	if (input.value.length < min) {
		showError(
			input,
			`${input.placeholder} musi składać się z min. ${min} znaków`
		);
	}
};

const checkMail = (email) => {
	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	if (re.test(emailInput.value)) {
		clearError(email);
	} else {
		showError(email, 'Adres mail jest niepoprawny');
	}
};

const checkErrors = () => {
	let errorCount = 0;

	errorMsg.forEach((el) => {
		if (el.classList.contains('error')) {
			errorCount++;
		}
	});

	if (errorCount === 0) {
		popup.classList.add('show-popup');

		setTimeout(() => {
			popup.classList.remove('show-popup');
			nameInput.value = '';
			emailInput.value = '';
			textareaInput.value = '';
		}, 3000);
	}
};

btn.addEventListener('click', (e) => {
	e.preventDefault();

	checkForm([nameInput, emailInput, textareaInput]);
	checkLength(textareaInput, 8);
	checkMail(email);
	checkErrors();
});
