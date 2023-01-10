import { nanoid } from "nanoid";
import "./style.css";

const btnElement = document.querySelector('button');
const textElement = document.querySelector('h2');

btnElement.addEventListener('click', () => {
    const randomPassword = nanoid();
    textElement.innerHTML = randomPassword
})