import { nanoid } from 'nanoid'
import "./style.css";

console.log(nanoid() +  ' ' + 'tmnc');
const passwordBtnEl = document.querySelector('button');
const displayPasswordEl = document.querySelector('h2');

passwordBtnEl.addEventListener('click', () => {
  const randomPassword = nanoid();
  displayPasswordEl.innerHTML = randomPassword;
});