// eslint-disable-next-line import/extensions
import {info,errorMsg} from './local.js';

// Home page
const HAMBURGER_MENU_ELEMENT = document.getElementById('btn-menu');
const IMG_SRC_ELEMENT = document.getElementById('imgSrc');
const NAV_CONTAINER_ELEMENT = document.querySelector('.nav__container');
const BODY_ELEMENT = document.querySelector('body');

// contact Page
const FIRST_NAME_ELEMENT = document.getElementById('firstName');
const LAST_NAME_ELEMENT = document.getElementById('lastName');
const EMAIL_ELEMENT = document.getElementById('email');
const PHONR_NUM_ELEMENT = document.getElementById('number');
const SUBJECT_ELEMENT = document.getElementById('subject');
const MESSAGE_ELEMENT = document.getElementById('message');
const SUBMIT_BUTTON_ELEMENT = document.getElementById('submit--btn');

const hamburgerMenu = () => {
  const visibility = NAV_CONTAINER_ELEMENT.getAttribute('data-visible');
  if (visibility === 'false') {
    NAV_CONTAINER_ELEMENT.setAttribute('data-visible', true);
    HAMBURGER_MENU_ELEMENT.setAttribute('aria-expanded', true);
    IMG_SRC_ELEMENT.src = 'img/x.svg';
    BODY_ELEMENT.style.overflow = 'hidden';
  } else {
    NAV_CONTAINER_ELEMENT.setAttribute('data-visible', false);
    HAMBURGER_MENU_ELEMENT.setAttribute('aria-expanded', false);
    IMG_SRC_ELEMENT.src = 'img/menu.svg';
    BODY_ELEMENT.style.overflow = 'auto';
  }
};
HAMBURGER_MENU_ELEMENT.addEventListener('click', hamburgerMenu);

function heroInfo(name, degination) {
  if (!(document.URL.includes('contact', 'project','about'))) {
    const potfolioers_name = document.getElementById('heroImage__text--name');
    const potfolioers_degination = document.getElementById(
      'heroImage__text--degination',
    );

    potfolioers_name.innerHTML = name;
    potfolioers_degination.innerHTML = degination;
  }
}

heroInfo(info.name, info.degination);
let message = '';

const checkForSpecialChar = (fieldValue) => {
  if (!(/^[a-z, A-Z]+$/.test(fieldValue))) {
    message = errorMsg.validName;
    return message;
  }
  return 0;
};


const firstNameValidation = () => {
  const firstName = FIRST_NAME_ELEMENT.value.trim();

  if (firstName.length <= 1 || firstName.length > 20) {
    message = errorMsg.firstNamelength;
    return message;
  }
  if (firstName.trim() === true) {
    message = errorMsg.firstNameContainSpace;;
    return message;
}
  if(checkForSpecialChar(firstName)) {
    return message;
  }
  return firstName;
};
const lastNameValidation = () => {
  const lastName = LAST_NAME_ELEMENT.value.trim();

  if (lastName.length <= 1 || lastName.length > 20) {
    message = errorMsg.lastNamelength;
    return message;
  }
  if (/\s/.test(lastName)) {
    message = errorMsg.lastNameContainSpace;
    return message;
  }
  if(checkForSpecialChar(lastName)) {
    return message;
  }
  return lastName;
};

const nameValidation = () => {  
    firstNameValidation();
    lastNameValidation();
};

// E-mail validation 

const emailValidation = () => {
  const email = EMAIL_ELEMENT.value.trim();

  if (/\s/.test(email)) {
    message = errorMsg.emailContainSpace;
    return message;
  }
  if(!(email.includes("@")) || !(email.includes('.'))) {
    message = errorMsg.validEmail;
    return message;
  }
  return email;
};

// number validation

const numberVaidation = () => {
  const number = PHONR_NUM_ELEMENT.value.trim();
  if (number.length < 10 || number.length > 10) {
    message = errorMsg.validNumber;
    return message;
  }
  if (/\s/.test(number)) {
    message = errorMsg.numberContainSpace;
    return message;
  }
  if (!(/^[0-9]+$/.test(number))) {
    message = errorMsg.validNumber;
    return message;
  }
  return number;
};

// message and subject 

const subjectValidation = () => {
  const subject = SUBJECT_ELEMENT.value.trim();
  return subject;
};
const messageValidation = () => {
  const msg = MESSAGE_ELEMENT.value.trim();
  return msg;
};
const showOutput = () => {
  const OUTPUT_ELEMENT = document.getElementById('output');
  OUTPUT_ELEMENT.innerHTML = `<p>First Name: ${firstNameValidation()}</p>
  <p>Last Name: ${lastNameValidation()}</p> <p>Email: ${emailValidation()}</p> <p>Phone number: ${(numberVaidation())}</p> <p> Subject: ${(subjectValidation())}</p> <p> Message: ${(messageValidation())}</p>`;
};
const formValidation = (event) => {
  if (document.URL.includes('contact')) {
  event.preventDefault();
  nameValidation();
  emailValidation();
  numberVaidation();
  showOutput();
  }
};

SUBMIT_BUTTON_ELEMENT.addEventListener('click', formValidation);


